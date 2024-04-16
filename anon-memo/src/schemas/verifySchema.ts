import { z } from "zod"

export const verifycodeSchema =z.object({
    code :z.string().length(6, 'Verification Code must be 6 digits')
})
 

