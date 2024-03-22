import { createClient } from '@supabase/supabase-js'

export default function useSupabase(){

    const url ="https://lqquzolvtqkjdfafaxle.supabase.co"

    const anon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxcXV6b2x2dHFramRmYWZheGxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNDgzMDMsImV4cCI6MjAyMjcyNDMwM30.bLuNrn5zZl0_FRtmLyrLA7BzePUhqTPmGTwga6AYZlE"
    
    const supabase = createClient(url, anon)
    
    return {supabase}

}

