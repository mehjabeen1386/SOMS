
'use client';

import { FormEvent, useState } from 'react';

export type Child = {
  id: number;
  name: string;
  age: number;
  gender: string;
  guardian: string;
  admissionDate: string;
  status: string;
};

type ChildrenTableProps = {
  children: Child[];
  onRefresh: () => Promise<void>;
};

export default function ChildrenTable({
  children,
  onRefresh
}: ChildrenTableProps) {
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: 'Male',
    guardian: '',
    admissionDate: '',
    status: 'Active'
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSaving(true);
    setError('');

    try {
      const response = await fetch('/api/children', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to add child');
      }

      setForm({
        name: '',
        age: '',
        gender: 'Male',
        guardian: '',
        admissionDate: '',
        status: 'Active'
      });

      await onRefresh();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Something went wrong'
      );
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this child?'
    );

    if (!confirmed) return;

    const response = await fetch(`/api/children?id=${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      await onRefresh();
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-xl font-semibold">
          Add Child
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-4 grid gap-4 md:grid-cols-2"
        >
          <input
            required
            placeholder="Child name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="rounded-lg border border-slate-300 px-4 py-2"
          />

          <input
            required
            type="number"
            min="1"
            max="18"
            placeholder="Age"
            value={form.age}
            onChange={(e) =>
              setForm({ ...form, age: e.target.value })
            }
            className="rounded-lg border border-slate-300 px-4 py-2"
          />

          <select
            value={form.gender}
            onChange={(e) =>
              setForm({ ...form, gender: e.target.value })
            }
            className="rounded-lg border border-slate-300 px-4 py-2"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input
            required
            placeholder="Guardian name"
            value={form.guardian}
            onChange={(e) =>
              setForm({ ...form, guardian: e.target.value })
            }
            className="rounded-lg border border-slate-300 px-4 py-2"
          />

          <input
            type="date"
            value={form.admissionDate}
            onChange={(e) =>
              setForm({
                ...form,
                admissionDate: e.target.value
              })
            }
            className="rounded-lg border border-slate-300 px-4 py-2"
          />

          <select
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
            className="rounded-lg border border-slate-300 px-4 py-2"
          >
            <option value="Active">Active</option>
            <option value="Transferred">Transferred</option>
            <option value="Graduated">Graduated</option>
          </select>

          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700 disabled:opacity-50 md:col-span-2"
          >
            {saving ? 'Saving...' : 'Add Child'}
          </button>
        </form>

        {error && (
          <p className="mt-4 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
        <div className="border-b border-slate-200 p-6">
          <h2 className="text-xl font-semibold">
            Children Records
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Age</th>
                <th className="px-6 py-3">Gender</th>
                <th className="px-6 py-3">Guardian</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {(children || []).length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-8 text-center text-slate-500"
                  >
                    No children records found.
                  </td>
                </tr>
              ) : (
                children.map((child: any) => (
                  <tr
                    key={child.id}
                    className="border-t border-slate-200"
                  >
                    <td className="px-6 py-4 font-medium">
                      {child.name}
                    </td>

                    <td className="px-6 py-4">
                      {child.age}
                    </td>

                    <td className="px-6 py-4">
                      {child.gender}
                    </td>

                    <td className="px-6 py-4">
                      {child.guardian}
                    </td>

                    <td className="px-6 py-4">
                      {child.status}
                    </td>

                    <td className="px-6 py-4">
                      <button
                        onClick={() =>
                          handleDelete(child.id)
                        }
                        className="font-medium text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}