import { createClient } from '@supabase/supabase-js'

const url ="https://xzhmfiwrnzzunouxywvd.supabase.co"

const anon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6aG1maXdybnp6dW5vdXh5d3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MDM1MDgsImV4cCI6MjAyNDE3OTUwOH0.kjRYMu70d_fq_reQsJOmSnnsD6gYvkqsVwWIb8_i1uc"

const supabase = createClient(url, anon)

export default supabase