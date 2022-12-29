import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

export const supabase = createClient('https://vekvfzssjhkfyayrquln.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZla3ZmenNzamhrZnlheXJxdWxuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3MTM0NzMwNiwiZXhwIjoxOTg2OTIzMzA2fQ.obhXB_CU8nMT6_jRC3o8rMLCFJQJI2C5ElAAZcSQCLo')