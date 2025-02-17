import { z } from "zod"

export const messageSchema =z.object({
    content :z.string()
    .min(10,'Content must be  at least 10 characters long')
    .max(300,'Content must be no longer that 300 characters'),
})