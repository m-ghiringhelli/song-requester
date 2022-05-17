# PLAN

-views
  -auth
  -list of song ideas
  -edit
  -add
-components
  -AuthForm (for sign-in / sign-up)
  -RequestForm (for adding, editing, copying)
  -RequestsList (a list of user-submitted requests)
  -RequestDetail (for more information about a request)
-services
  -getSongRequests (to fetch the list of request from supabase)
-context
  -AuthContext (to store user data)
  -SongContext (to provide the list of song requests)
