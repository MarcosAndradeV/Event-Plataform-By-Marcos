import { CheckCircle, Lock} from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonPrpos {
    title: string;
    slug: string;
    avialableAt: Date;
    type: 'Live' | 'class';
}


export function Lesson(props: LessonPrpos){
    const isLessonAvailable = isPast(props.avialableAt);
    const availableDateFormated = format(props.avialableAt, "EEEE' • 'd' de 'MMM' • 'k'h'mm", {
        locale:ptBR
    })

    return (
        <a href="" className="">
            <span className="text-gray-300" >
                {availableDateFormated}
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex item-center justify-between">
                    {isLessonAvailable ? (
                        <span className="text-sn text-blue-500 font-medium flex items-center gap-2" >
                            <CheckCircle size={20}/>
                            Conteudo Liberado
                        </span>) :(
                        <span className="text-sn text-orange-500 font-medium flex items-center gap-2" >
                            <Lock size={20}/>
                            Em Breve
                        </span> 
                    )}
                    <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
                        {props.type == 'Live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <span>
                    <strong className="text-gray-200 mt-5 block">
                        {props.title}
                    </strong>
                </span>
            </div>
        </a>
)
}