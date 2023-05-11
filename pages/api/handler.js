import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handle(req, res) {
    const rtps = await prisma.rtps.findMany()
    const freespins = await prisma.bonus.findMany()

    const q = req.query.type
    if(!q) res.json("need to specifie type.")

    q === "rtp" ? res.json(rtps) : res.json(freespins)
}