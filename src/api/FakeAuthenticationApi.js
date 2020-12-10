


//utworzony modół
const FakeAuthenticationApi = {
   
    login: async function(credentials){
        const {email, password} = credentials
        if (email === "bob@example.com" && password === "secret") {

            return {
                accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvYkBleGFtcGxlLmNvbSIsImlhdCI6MTYwNzUwNDU2NiwiZXhwIjoxNjA3NTA4MTY2LCJzdWIiOiIxIn0.w9aIezqtop9r_xDXrzw6fuf5tL2TsLhP00vlDaLOvMA"
            }
        }
         throw new Error ("Invalid credentials");
    }
    
     
}
 

export default FakeAuthenticationApi;
