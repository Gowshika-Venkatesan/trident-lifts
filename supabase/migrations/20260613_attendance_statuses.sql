alter table public.attendance
drop constraint if exists attendance_status_check;

alter table public.attendance
add constraint attendance_status_check
check (status in ('present', 'leave', 'half_day', 'absent', 'holiday'));
