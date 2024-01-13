import { Globe, Question, UserCircle } from 'phosphor-react';
import Link from 'next/link';

export function IconLink({Icon, Url}) {
  return(
  <>
  <Link href={Link}>
    <Question size={20} color="#171717" />
  </Link>
    <Link href={Link}>
    <Globe size={20} color="#171717" />
  </Link>
    <Link href={Link}>
    <UseCircler size={20} color="#171717" />
  </Link>
  </>
  )
}