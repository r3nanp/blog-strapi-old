// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiResponse } from 'next'

export default (_req, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' })
}
