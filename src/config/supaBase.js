

import { createClient } from '@supabase/supabase-js'


const supabaseUrl = "https://plhwuwwpjiptmrgmjzno.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsaHd1d3dwamlwdG1yZ21qem5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1NTM2MjYsImV4cCI6MjAyMjEyOTYyNn0.uaEvCpuYPjWB4xbq-PTe5bfSX6hCtxikSB2y8J2B5Pc"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase