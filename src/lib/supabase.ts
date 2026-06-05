import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://mqefcaytezoxdsmdeaiy.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImNmMDExYmEzLTI3MGItNGU3Zi1hMTQ0LTU3MmRhZWZhYWFkNiJ9.eyJwcm9qZWN0SWQiOiJtcWVmY2F5dGV6b3hkc21kZWFpeSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzgwNjE2MzUxLCJleHAiOjIwOTU5NzYzNTEsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.M_Gj472isZqyq8psqRRC0gIAfWocOYc85ZidvqoWDUo';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };