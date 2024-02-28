import Link from 'next/link';
import FormAddress from '../../../components/formAddress';


export default function Address() {
  return (
    <div className="flex flex-col items-center justify-center lg:mt-10 ">
      <FormAddress/>
      <div className="flex w-60 item-center justify-between mt-2">
        <Link type='submit' href="/pages/registryCurriculum/" className="bg-[#E3E3E4] text-[#008037] border border-[#008037] rounded-lg flex w-20  items-center justify-center">Anterior</Link>
        <Link href="/pages/registryCurriculum/experience" className="bg-[#008037] rounded-lg text-white flex w-20  items-center justify-center">Proximo</Link>
        </div>
    </div>
  );
}
