import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://teyshqzklryzzyohbhol.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRleXNobnF6a2xyeXp5b2hiaG9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4MTgxNTksImV4cCI6MjA5NjM5NDE1OX0.BZE1mnQt2IqagAvNYyp5PxxzzRgD7IpZkA4qKwAZRv0';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };