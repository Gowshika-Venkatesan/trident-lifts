import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Banknote,
  CalendarCheck,
  CalendarDays,
  ChevronRight,
  CircleAlert,
  Clock3,
  IndianRupee,
  LayoutDashboard,
  LoaderCircle,
  LogOut,
  Menu,
  Plus,
  Pencil,
  Save,
  Search,
  ShieldCheck,
  Trash2,
  UserRoundPlus,
  Users,
  X,
} from 'lucide-react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';
import logo from '../assets/TES.png';

const tabs = [
  { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={19} /> },
  { id: 'employees', label: 'Employees', icon: <Users size={19} /> },
  { id: 'attendance', label: 'Attendance', icon: <CalendarCheck size={19} /> },
  { id: 'advances', label: 'Salary Advances', icon: <Banknote size={19} /> },
  { id: 'payroll', label: 'Payroll', icon: <IndianRupee size={19} /> },
];

const blankEmployee = {
  employee_code: '',
  full_name: '',
  phone: '',
  email: '',
  designation: '',
  department: '',
  date_of_joining: '',
  monthly_salary: '',
  status: 'active',
};

const today = new Date().toISOString().slice(0, 10);
const currentMonth = today.slice(0, 7);
const attendanceStatuses = [
  { value: 'present', label: 'Present', short: 'P', color: 'bg-emerald-100 text-emerald-700' },
  { value: 'leave', label: 'Leave', short: 'L', color: 'bg-amber-100 text-amber-700' },
  { value: 'half_day', label: 'Half Day', short: 'HD', color: 'bg-violet-100 text-violet-700' },
  { value: 'absent', label: 'Absent', short: 'A', color: 'bg-red-100 text-red-700' },
  { value: 'holiday', label: 'Holiday', short: 'H', color: 'bg-blue-100 text-blue-700' },
];

const attendanceMeta = Object.fromEntries(attendanceStatuses.map((status) => [status.value, status]));

const getMonthDays = (month) => {
  const [year, monthNumber] = month.split('-').map(Number);
  const totalDays = new Date(year, monthNumber, 0).getDate();
  return Array.from({ length: totalDays }, (_, index) => {
    const day = index + 1;
    const date = `${month}-${String(day).padStart(2, '0')}`;
    const localDate = new Date(year, monthNumber - 1, day);
    return {
      day,
      date,
      weekday: localDate.toLocaleDateString('en-IN', { weekday: 'short' }),
      isSunday: localDate.getDay() === 0,
    };
  });
};

const money = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

function SetupRequired() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#07111f] px-6 py-16 text-white">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur sm:p-12">
        <ShieldCheck size={44} className="text-cyan-300" />
        <p className="overline mt-8 text-cyan-300">Secure setup required</p>
        <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">The admin portal is ready to connect.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Add the Supabase project URL and public anonymous key to the deployment environment before employee data can be stored or accessed.
        </p>
        <div className="mt-8 rounded-2xl bg-black/25 p-5 font-mono text-sm leading-7 text-cyan-100">
          <p>VITE_SUPABASE_URL=...</p>
          <p>VITE_SUPABASE_ANON_KEY=...</p>
        </div>
        <p className="mt-6 text-sm leading-6 text-slate-400">
          Follow <strong className="text-white">ADMIN_SETUP.md</strong>. Do not place the Supabase service-role key in this website.
        </p>
      </div>
    </div>
  );
}

function AdminLogin({ onAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const signIn = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    const { data, error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (signInError) {
      setError(signInError.message);
      return;
    }
    onAuthenticated(data.session);
  };

  return (
    <div className="grid min-h-screen bg-[#07111f] lg:grid-cols-2">
      <div className="relative hidden overflow-hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1167b1] via-[#0a4275] to-[#07111f]" />
        <div className="absolute -left-32 top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -left-16 top-48 h-96 w-96 rounded-full border border-white/10" />
        <div className="relative flex h-full flex-col justify-between p-16 text-white">
          <img src={logo} alt="Trident Elevating Solutions" className="h-14 w-auto self-start brightness-0 invert" />
          <div>
            <p className="overline text-cyan-300">Trident Workforce</p>
            <h1 className="mt-5 max-w-xl font-display text-6xl font-semibold leading-[1.03]">People, attendance and payroll in one place.</h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-blue-100">A private operating system for the team behind every journey.</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 py-16">
        <form onSubmit={signIn} className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl sm:p-10">
          <img src={logo} alt="Trident" className="h-12 w-auto lg:hidden" />
          <p className="overline mt-8 lg:mt-0">Private administration</p>
          <h2 className="mt-4 font-display text-4xl font-semibold">Welcome back.</h2>
          <p className="mt-3 leading-7 text-slate-600">Sign in with an authorized administrator account.</p>
          <div className="mt-8 space-y-5">
            <label className="field-label">
              Email
              <input className="field-input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required autoComplete="email" />
            </label>
            <label className="field-label">
              Password
              <input className="field-input" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete="current-password" />
            </label>
          </div>
          {error && <p className="mt-5 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</p>}
          <button type="submit" disabled={loading} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1167b1] px-6 py-4 font-extrabold text-white transition hover:bg-[#07111f] disabled:opacity-60">
            {loading && <LoaderCircle size={18} className="animate-spin" />}
            Sign in securely
          </button>
        </form>
      </div>
    </div>
  );
}

function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#07111f]/75 p-4 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white p-7 shadow-2xl sm:p-9">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold">{title}</h2>
          <button type="button" onClick={onClose} className="rounded-full bg-slate-100 p-2"><X size={20} /></button>
        </div>
        {children}
      </div>
    </div>
  );
}

function AdminPage() {
  const [session, setSession] = useState(null);
  const [checkingSession, setCheckingSession] = useState(isSupabaseConfigured);
  const [activeTab, setActiveTab] = useState('overview');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [advances, setAdvances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [showEmployeeForm, setShowEmployeeForm] = useState(false);
  const [employeeForm, setEmployeeForm] = useState(blankEmployee);
  const [attendanceDate, setAttendanceDate] = useState(today);
  const [attendanceDraft, setAttendanceDraft] = useState({});
  const [attendanceMonth, setAttendanceMonth] = useState(currentMonth);
  const [attendanceView, setAttendanceView] = useState('daily');
  const [advanceForm, setAdvanceForm] = useState({ employee_id: '', amount: '', advance_date: today, reason: '' });
  const [payrollMonth, setPayrollMonth] = useState(currentMonth);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError('');
    const [employeeResult, attendanceResult, advanceResult] = await Promise.all([
      supabase.from('employees').select('*').order('full_name'),
      supabase.from('attendance').select('*').order('attendance_date', { ascending: false }),
      supabase.from('salary_advances').select('*').order('advance_date', { ascending: false }),
    ]);
    const firstError = employeeResult.error || attendanceResult.error || advanceResult.error;
    if (firstError) setError(firstError.message);
    setEmployees(employeeResult.data || []);
    setAttendance(attendanceResult.data || []);
    setAdvances(advanceResult.data || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!isSupabaseConfigured) return undefined;

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setCheckingSession(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => setSession(nextSession));
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) return undefined;
    const timer = window.setTimeout(() => loadData(), 0);
    return () => window.clearTimeout(timer);
  }, [session, loadData]);

  const activeEmployees = useMemo(() => employees.filter((employee) => employee.status === 'active'), [employees]);
  const filteredEmployees = useMemo(() => {
    const term = search.toLowerCase();
    return employees.filter((employee) => [employee.full_name, employee.employee_code, employee.designation, employee.department].some((value) => value?.toLowerCase().includes(term)));
  }, [employees, search]);

  const attendanceForDate = useMemo(
    () => new Map(attendance.filter((entry) => entry.attendance_date === attendanceDate).map((entry) => [entry.employee_id, entry])),
    [attendance, attendanceDate],
  );

  const monthDays = useMemo(() => getMonthDays(attendanceMonth), [attendanceMonth]);
  const monthlyAttendanceMap = useMemo(
    () => new Map(
      attendance
        .filter((entry) => entry.attendance_date.startsWith(attendanceMonth))
        .map((entry) => [`${entry.employee_id}:${entry.attendance_date}`, entry]),
    ),
    [attendance, attendanceMonth],
  );

  const payrollRows = useMemo(() => {
    return activeEmployees.map((employee) => {
      const approvedAdvance = advances
        .filter((advance) => advance.employee_id === employee.id && advance.status === 'approved' && advance.advance_date.startsWith(payrollMonth))
        .reduce((sum, advance) => sum + Number(advance.amount), 0);
      const employeeAttendance = attendance.filter((entry) => entry.employee_id === employee.id && entry.attendance_date.startsWith(payrollMonth));
      const presentDays = employeeAttendance.filter((entry) => entry.status === 'present').length;
      const leaveDays = employeeAttendance.filter((entry) => entry.status === 'leave').length;
      const halfDays = employeeAttendance.filter((entry) => entry.status === 'half_day').length;
      return {
        ...employee,
        approvedAdvance,
        presentDays,
        leaveDays,
        halfDays,
        netSalary: Math.max(Number(employee.monthly_salary || 0) - approvedAdvance, 0),
      };
    });
  }, [activeEmployees, advances, attendance, payrollMonth]);

  const saveEmployee = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { id, ...fields } = employeeForm;
    const payload = { ...fields, monthly_salary: Number(employeeForm.monthly_salary || 0) };
    const query = id
      ? supabase.from('employees').update(payload).eq('id', id)
      : supabase.from('employees').insert(payload);
    const { error: saveError } = await query;
    setLoading(false);
    if (saveError) {
      setError(saveError.message);
      return;
    }
    setShowEmployeeForm(false);
    setEmployeeForm(blankEmployee);
    loadData();
  };

  const editEmployee = (employee) => {
    setEmployeeForm({
      ...blankEmployee,
      ...employee,
      monthly_salary: String(employee.monthly_salary || ''),
    });
    setShowEmployeeForm(true);
  };

  const deleteEmployee = async (employee) => {
    if (!window.confirm(`Remove ${employee.full_name}? Attendance and advance history may also be deleted.`)) return;
    const { error: deleteError } = await supabase.from('employees').delete().eq('id', employee.id);
    if (deleteError) setError(deleteError.message);
    else loadData();
  };

  const saveAttendance = async () => {
    const records = activeEmployees
      .map((employee) => ({
        employee,
        status: attendanceDraft[employee.id] ?? attendanceForDate.get(employee.id)?.status ?? '',
      }))
      .filter(({ status }) => status)
      .map(({ employee, status }) => ({
        employee_id: employee.id,
        attendance_date: attendanceDate,
        status,
        check_in: status === 'present' ? attendanceForDate.get(employee.id)?.check_in || new Date().toTimeString().slice(0, 5) : null,
      }));

    if (!records.length) {
      setError('Select an attendance status for at least one employee.');
      return;
    }

    setLoading(true);
    setError('');
    const { error: attendanceError } = await supabase
      .from('attendance')
      .upsert(records, { onConflict: 'employee_id,attendance_date' });
    setLoading(false);
    if (attendanceError) setError(attendanceError.message);
    else {
      setAttendanceDraft({});
      loadData();
    }
  };

  const addAdvance = async (event) => {
    event.preventDefault();
    const { error: advanceError } = await supabase.from('salary_advances').insert({
      ...advanceForm,
      amount: Number(advanceForm.amount),
      status: 'approved',
    });
    if (advanceError) {
      setError(advanceError.message);
      return;
    }
    setAdvanceForm({ employee_id: '', amount: '', advance_date: today, reason: '' });
    loadData();
  };

  const deleteAdvance = async (id) => {
    const { error: deleteError } = await supabase.from('salary_advances').delete().eq('id', id);
    if (deleteError) setError(deleteError.message);
    else loadData();
  };

  if (!isSupabaseConfigured) return <SetupRequired />;
  if (checkingSession) return <div className="flex min-h-screen items-center justify-center bg-[#07111f] text-white"><LoaderCircle size={36} className="animate-spin" /></div>;
  if (!session) return <AdminLogin onAuthenticated={setSession} />;

  const renderContent = () => {
    if (activeTab === 'overview') {
      const todayPresent = attendance.filter((entry) => entry.attendance_date === today && entry.status === 'present').length;
      const currentAdvances = advances.filter((advance) => advance.advance_date.startsWith(currentMonth)).reduce((sum, advance) => sum + Number(advance.amount), 0);
      return (
        <>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ['Active employees', activeEmployees.length, <Users size={23} />, 'bg-blue-50 text-[#1167b1]'],
              ['Present today', todayPresent, <CalendarCheck size={23} />, 'bg-emerald-50 text-emerald-700'],
              ['Absent today', Math.max(activeEmployees.length - todayPresent, 0), <Clock3 size={23} />, 'bg-amber-50 text-amber-700'],
              ['Advances this month', money(currentAdvances), <Banknote size={23} />, 'bg-violet-50 text-violet-700'],
            ].map(([label, value, icon, color]) => (
              <article key={label} className="rounded-[1.5rem] bg-white p-6 shadow-sm">
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}>{icon}</span>
                <p className="mt-6 text-sm font-bold text-slate-500">{label}</p>
                <p className="mt-1 text-3xl font-black tracking-tight">{value}</p>
              </article>
            ))}
          </div>
          <div className="mt-7 grid gap-7 xl:grid-cols-[1.2fr_.8fr]">
            <section className="admin-panel">
              <div className="flex items-center justify-between"><h2 className="admin-title">Recent employees</h2><button type="button" onClick={() => setActiveTab('employees')} className="text-sm font-extrabold text-[#1167b1]">View all</button></div>
              <div className="mt-5 divide-y divide-slate-100">
                {employees.slice(0, 6).map((employee) => (
                  <div key={employee.id} className="flex items-center justify-between gap-4 py-4">
                    <div><p className="font-bold">{employee.full_name}</p><p className="text-sm text-slate-500">{employee.designation || 'Team member'}</p></div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold capitalize">{employee.status}</span>
                  </div>
                ))}
              </div>
            </section>
            <section className="admin-panel bg-[#07111f] text-white">
              <p className="overline text-cyan-300">Quick actions</p>
              <h2 className="mt-3 font-display text-3xl font-semibold">Keep today organized.</h2>
              <div className="mt-7 space-y-3">
                {[['employees', 'Add an employee'], ['attendance', 'Mark attendance'], ['advances', 'Record salary advance'], ['payroll', 'Review payroll']].map(([tab, label]) => (
                  <button key={tab} type="button" onClick={() => setActiveTab(tab)} className="flex w-full items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-left font-bold hover:bg-white/15">
                    {label}<ChevronRight size={17} />
                  </button>
                ))}
              </div>
            </section>
          </div>
        </>
      );
    }

    if (activeTab === 'employees') {
      return (
        <section className="admin-panel">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div><h2 className="admin-title">Employees</h2><p className="mt-1 text-sm text-slate-500">Manage employment and salary details.</p></div>
            <button type="button" onClick={() => setShowEmployeeForm(true)} className="admin-primary"><UserRoundPlus size={18} /> Add employee</button>
          </div>
          <div className="relative mt-6 max-w-md">
            <Search size={18} className="absolute left-4 top-3.5 text-slate-400" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-[#1167b1]" placeholder="Search employees" />
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="admin-table">
              <thead><tr><th>Employee</th><th>Code</th><th>Department</th><th>Joining date</th><th>Salary</th><th>Status</th><th /></tr></thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td><p className="font-bold">{employee.full_name}</p><p className="text-xs text-slate-500">{employee.designation}</p></td>
                    <td>{employee.employee_code}</td><td>{employee.department || '-'}</td><td>{employee.date_of_joining || '-'}</td><td>{money(employee.monthly_salary)}</td>
                    <td><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold capitalize text-emerald-700">{employee.status}</span></td>
                    <td>
                      <div className="flex">
                        <button type="button" onClick={() => editEmployee(employee)} className="rounded-lg p-2 text-slate-400 hover:bg-blue-50 hover:text-[#1167b1]" aria-label={`Edit ${employee.full_name}`}><Pencil size={17} /></button>
                        <button type="button" onClick={() => deleteEmployee(employee)} className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600" aria-label={`Delete ${employee.full_name}`}><Trash2 size={17} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      );
    }

    if (activeTab === 'attendance') {
      return (
        <div className="space-y-7">
          <section className="admin-panel">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
              <div>
                <h2 className="admin-title">Attendance register</h2>
                <p className="mt-1 text-sm text-slate-500">Record daily attendance or review the complete monthly register.</p>
              </div>
              <div className="inline-flex self-start rounded-xl bg-slate-100 p-1">
                <button type="button" onClick={() => setAttendanceView('daily')} className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-extrabold transition ${attendanceView === 'daily' ? 'bg-white text-[#1167b1] shadow-sm' : 'text-slate-500'}`}>
                  <CalendarCheck size={17} /> Daily entry
                </button>
                <button type="button" onClick={() => setAttendanceView('monthly')} className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-extrabold transition ${attendanceView === 'monthly' ? 'bg-white text-[#1167b1] shadow-sm' : 'text-slate-500'}`}>
                  <CalendarDays size={17} /> Monthly register
                </button>
              </div>
            </div>
          </section>

          {attendanceView === 'daily' ? (
            <section className="admin-panel">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-lg font-black">Daily attendance</h3>
                  <p className="mt-1 text-sm text-slate-500">Choose one status for each employee, then save the register.</p>
                </div>
                <input
                  type="date"
                  value={attendanceDate}
                  onChange={(event) => {
                    setAttendanceDate(event.target.value);
                    setAttendanceDraft({});
                  }}
                  className="rounded-xl border border-slate-200 px-4 py-3 font-bold outline-none focus:border-[#1167b1]"
                />
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="admin-table min-w-[680px]">
                  <thead><tr><th>Employee</th><th>Department</th><th>Attendance status</th><th>Saved status</th></tr></thead>
                  <tbody>
                    {activeEmployees.map((employee) => {
                      const savedRecord = attendanceForDate.get(employee.id);
                      const draftStatus = attendanceDraft[employee.id] ?? savedRecord?.status ?? '';
                      const savedMeta = savedRecord ? attendanceMeta[savedRecord.status] : null;
                      return (
                        <tr key={employee.id}>
                          <td><p className="font-bold text-slate-900">{employee.full_name}</p><p className="text-xs text-slate-500">{employee.employee_code}</p></td>
                          <td>{employee.department || employee.designation || '-'}</td>
                          <td>
                            <select
                              value={draftStatus}
                              onChange={(event) => setAttendanceDraft((current) => ({ ...current, [employee.id]: event.target.value }))}
                              className="w-full max-w-[210px] rounded-xl border border-slate-200 bg-white px-4 py-2.5 font-bold text-slate-700 outline-none focus:border-[#1167b1]"
                            >
                              <option value="">Select status</option>
                              {attendanceStatuses.map((status) => <option key={status.value} value={status.value}>{status.label}</option>)}
                            </select>
                          </td>
                          <td>{savedMeta ? <span className={`inline-flex rounded-full px-3 py-1 text-xs font-extrabold ${savedMeta.color}`}>{savedMeta.label}</span> : <span className="text-xs font-semibold text-slate-400">Not saved</span>}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex flex-col justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center">
                <p className="text-sm text-slate-500">
                  {activeEmployees.filter((employee) => (attendanceDraft[employee.id] ?? attendanceForDate.get(employee.id)?.status)).length} of {activeEmployees.length} employees marked
                </p>
                <button type="button" onClick={saveAttendance} disabled={loading} className="admin-primary justify-center disabled:opacity-60">
                  {loading ? <LoaderCircle size={18} className="animate-spin" /> : <Save size={18} />}
                  Save attendance
                </button>
              </div>
            </section>
          ) : (
            <section className="admin-panel">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-lg font-black">Monthly attendance</h3>
                  <p className="mt-1 text-sm text-slate-500">Day-by-day status with employee totals for the selected month.</p>
                </div>
                <input type="month" value={attendanceMonth} onChange={(event) => setAttendanceMonth(event.target.value)} className="rounded-xl border border-slate-200 px-4 py-3 font-bold outline-none focus:border-[#1167b1]" />
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {attendanceStatuses.map((status) => <span key={status.value} className={`rounded-full px-3 py-1 text-xs font-extrabold ${status.color}`}>{status.short} = {status.label}</span>)}
              </div>

              <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
                <table className="attendance-matrix">
                  <thead>
                    <tr>
                      <th className="sticky left-0 z-20 min-w-[210px] bg-slate-50 text-left">Employee</th>
                      {monthDays.map((day) => <th key={day.date} className={day.isSunday ? 'bg-blue-50 text-blue-700' : ''}><span>{day.day}</span><small>{day.weekday}</small></th>)}
                      <th className="bg-emerald-50 text-emerald-700">P</th>
                      <th className="bg-violet-50 text-violet-700">HD</th>
                      <th className="bg-amber-50 text-amber-700">L</th>
                      <th className="bg-red-50 text-red-700">A</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeEmployees.map((employee) => {
                      const records = monthDays.map((day) => monthlyAttendanceMap.get(`${employee.id}:${day.date}`));
                      const count = (status) => records.filter((record) => record?.status === status).length;
                      return (
                        <tr key={employee.id}>
                          <td className="sticky left-0 z-10 bg-white"><p className="font-bold text-slate-900">{employee.full_name}</p><p className="text-xs text-slate-400">{employee.employee_code}</p></td>
                          {monthDays.map((day) => {
                            const record = monthlyAttendanceMap.get(`${employee.id}:${day.date}`);
                            const meta = record ? attendanceMeta[record.status] : null;
                            return <td key={day.date} className={day.isSunday && !meta ? 'bg-blue-50/60' : ''}>{meta ? <span title={meta.label} className={`attendance-code ${meta.color}`}>{meta.short}</span> : <span className="text-slate-300">-</span>}</td>;
                          })}
                          <td className="font-black text-emerald-700">{count('present')}</td>
                          <td className="font-black text-violet-700">{count('half_day')}</td>
                          <td className="font-black text-amber-700">{count('leave')}</td>
                          <td className="font-black text-red-700">{count('absent')}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>
      );
    }

    if (activeTab === 'advances') {
      return (
        <div className="grid gap-7 xl:grid-cols-[.75fr_1.25fr]">
          <section className="admin-panel">
            <h2 className="admin-title">Record advance</h2>
            <form onSubmit={addAdvance} className="mt-6 space-y-5">
              <label className="field-label">Employee<select className="field-input" value={advanceForm.employee_id} onChange={(event) => setAdvanceForm({ ...advanceForm, employee_id: event.target.value })} required><option value="">Select employee</option>{activeEmployees.map((employee) => <option key={employee.id} value={employee.id}>{employee.full_name}</option>)}</select></label>
              <label className="field-label">Amount<input className="field-input" type="number" min="1" value={advanceForm.amount} onChange={(event) => setAdvanceForm({ ...advanceForm, amount: event.target.value })} required /></label>
              <label className="field-label">Date<input className="field-input" type="date" value={advanceForm.advance_date} onChange={(event) => setAdvanceForm({ ...advanceForm, advance_date: event.target.value })} required /></label>
              <label className="field-label">Reason<textarea className="field-input min-h-24" value={advanceForm.reason} onChange={(event) => setAdvanceForm({ ...advanceForm, reason: event.target.value })} /></label>
              <button type="submit" className="admin-primary w-full justify-center"><Save size={18} /> Save advance</button>
            </form>
          </section>
          <section className="admin-panel">
            <h2 className="admin-title">Advance history</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="admin-table">
                <thead><tr><th>Employee</th><th>Date</th><th>Reason</th><th>Amount</th><th /></tr></thead>
                <tbody>{advances.map((advance) => {
                  const employee = employees.find((item) => item.id === advance.employee_id);
                  return <tr key={advance.id}><td className="font-bold">{employee?.full_name || 'Unknown'}</td><td>{advance.advance_date}</td><td>{advance.reason || '-'}</td><td className="font-bold">{money(advance.amount)}</td><td><button type="button" onClick={() => deleteAdvance(advance.id)} className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"><Trash2 size={17} /></button></td></tr>;
                })}</tbody>
              </table>
            </div>
          </section>
        </div>
      );
    }

    return (
      <section className="admin-panel">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div><h2 className="admin-title">Payroll overview</h2><p className="mt-1 text-sm text-slate-500">Salary less approved advances for the selected month.</p></div>
          <input type="month" value={payrollMonth} onChange={(event) => setPayrollMonth(event.target.value)} className="rounded-xl border border-slate-200 px-4 py-3 font-bold outline-none focus:border-[#1167b1]" />
        </div>
        <div className="mt-7 overflow-x-auto">
          <table className="admin-table">
            <thead><tr><th>Employee</th><th>Base salary</th><th>Present</th><th>Half day</th><th>Leave</th><th>Advances</th><th>Net payable</th></tr></thead>
            <tbody>{payrollRows.map((row) => <tr key={row.id}><td><p className="font-bold">{row.full_name}</p><p className="text-xs text-slate-500">{row.designation}</p></td><td>{money(row.monthly_salary)}</td><td>{row.presentDays}</td><td>{row.halfDays}</td><td>{row.leaveDays}</td><td className="text-red-600">-{money(row.approvedAdvance)}</td><td className="text-lg font-black text-emerald-700">{money(row.netSalary)}</td></tr>)}</tbody>
          </table>
        </div>
        <div className="mt-6 flex gap-3 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-800"><CircleAlert size={20} className="mt-0.5 shrink-0" /><p>This is a payroll overview, not a statutory payroll engine. Add leave policy, deductions, overtime, PF, ESI, tax and payslip rules before using it for final salary processing.</p></div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-[#f4f6f8]">
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#07111f] p-5 text-white transition-transform lg:translate-x-0 ${mobileMenu ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <img src={logo} alt="Trident" className="h-11 w-auto brightness-0 invert" />
          <button type="button" onClick={() => setMobileMenu(false)} className="rounded-lg p-2 lg:hidden"><X size={22} /></button>
        </div>
        <p className="mt-8 px-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">Workforce administration</p>
        <nav className="mt-4 space-y-1">
          {tabs.map((tab) => (
            <button type="button" key={tab.id} onClick={() => { setActiveTab(tab.id); setMobileMenu(false); }} className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-bold transition ${activeTab === tab.id ? 'bg-[#1167b1] text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
              {tab.icon}{tab.label}
            </button>
          ))}
        </nav>
        <button type="button" onClick={() => supabase.auth.signOut()} className="absolute bottom-6 left-5 right-5 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-400 hover:bg-white/5 hover:text-white"><LogOut size={19} /> Sign out</button>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-5 backdrop-blur-xl sm:px-8">
          <div className="flex items-center gap-4">
            <button type="button" onClick={() => setMobileMenu(true)} className="rounded-xl bg-slate-100 p-2.5 lg:hidden"><Menu size={22} /></button>
            <div><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Admin portal</p><h1 className="text-xl font-black capitalize">{tabs.find((tab) => tab.id === activeTab)?.label}</h1></div>
          </div>
          <div className="hidden text-right sm:block"><p className="text-sm font-bold">{session.user.email}</p><p className="text-xs text-emerald-600">Authorized administrator</p></div>
        </header>

        <main className="p-5 sm:p-8">
          {error && <div className="mb-6 flex items-start justify-between gap-4 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-700"><span>{error}</span><button type="button" onClick={() => setError('')}><X size={17} /></button></div>}
          {loading && <div className="mb-5 flex items-center gap-2 text-sm font-bold text-slate-500"><LoaderCircle size={17} className="animate-spin" /> Refreshing data</div>}
          {renderContent()}
        </main>
      </div>

      {showEmployeeForm && (
        <Modal title={employeeForm.id ? 'Edit employee' : 'Add employee'} onClose={() => { setShowEmployeeForm(false); setEmployeeForm(blankEmployee); }}>
          <form onSubmit={saveEmployee} className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="field-label">Employee code<input className="field-input" value={employeeForm.employee_code} onChange={(event) => setEmployeeForm({ ...employeeForm, employee_code: event.target.value })} required /></label>
            <label className="field-label">Full name<input className="field-input" value={employeeForm.full_name} onChange={(event) => setEmployeeForm({ ...employeeForm, full_name: event.target.value })} required /></label>
            <label className="field-label">Phone<input className="field-input" value={employeeForm.phone} onChange={(event) => setEmployeeForm({ ...employeeForm, phone: event.target.value })} /></label>
            <label className="field-label">Email<input className="field-input" type="email" value={employeeForm.email} onChange={(event) => setEmployeeForm({ ...employeeForm, email: event.target.value })} /></label>
            <label className="field-label">Designation<input className="field-input" value={employeeForm.designation} onChange={(event) => setEmployeeForm({ ...employeeForm, designation: event.target.value })} /></label>
            <label className="field-label">Department<input className="field-input" value={employeeForm.department} onChange={(event) => setEmployeeForm({ ...employeeForm, department: event.target.value })} /></label>
            <label className="field-label">Date of joining<input className="field-input" type="date" value={employeeForm.date_of_joining} onChange={(event) => setEmployeeForm({ ...employeeForm, date_of_joining: event.target.value })} /></label>
            <label className="field-label">Monthly salary<input className="field-input" type="number" min="0" value={employeeForm.monthly_salary} onChange={(event) => setEmployeeForm({ ...employeeForm, monthly_salary: event.target.value })} /></label>
            <button type="submit" className="admin-primary justify-center sm:col-span-2">
              {employeeForm.id ? <Save size={18} /> : <Plus size={18} />}
              {employeeForm.id ? 'Save changes' : 'Add employee'}
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default AdminPage;
