import CandidateCard from '@/modules/components/candidateSelected';
import WhatsappMessenger from '../../../../../modules/components/whatsappMessenger';
export default function CandidateSelected() {
  return (
    <div className="w-full">
      <div className="lg:mx-10 lg:mt-10 lg:flex lg:items-center lg:justify-between ">
        <h2 className=" text-[#008037] lg:text-3xl lg:font-bold">Selecionar Candidatos</h2>
      </div>
        <div className="flex flex-row justify-between mx-10 mt-10">
            <div id="candidate_selected" className="flex flex-col">
                <CandidateCard/>
            </div>
            <div id="send_messenger_whatsapp">
                <WhatsappMessenger/>
            </div>

        </div>

      
    </div>
  );
}
