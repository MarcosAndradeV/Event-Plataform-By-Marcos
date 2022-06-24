import { CheckCircle, Lock} from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonPrpos {
    title: string;
    slug: string;
    avialableAt: Date;
    type: 'Live' | 'class';
}

// className={` ${isActiveLesson ?  : ''}`}

export function Lesson(props: LessonPrpos){
    const { slug } = useParams<{slug: string}>();
    const isLessonAvailable = isPast(props.avialableAt);
    const availableDateFormated = format(props.avialableAt, "EEEE' • 'd' de 'MMM' • 'k'h'mm", {
        locale:ptBR
    })

    const isActiveLesson = slug === props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300" >
                {availableDateFormated}
            </span>

            <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',{
                'bg-green-500' : isActiveLesson,
            })} 
            >
                <header className="flex item-center justify-between">
                    {isLessonAvailable ? (
                        <span className={classNames('text-sm font-medium flex items-center gap-2',{
                            'text-white': isActiveLesson,
                            'text-blue-500': !isActiveLesson
                        })} >
                            <CheckCircle size={20}/>
                            Conteudo Liberado
                        </span>) :(
                        <span className="text-sn text-orange-500 font-medium flex items-center gap-2" >
                            <Lock size={20}/>
                            Em Breve
                        </span> 
                    )}
                    <span className={classNames('text-xs rounded py-[0.125rem] px-2 text-white border font-bold',{
                        'border-white': isActiveLesson,
                        'border-green-300': !isActiveLesson
                    })}>
                        {props.type == 'Live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <span>
                    <strong className={classNames(" mt-5 block",{
                        'text-white': isActiveLesson,
                        'text-gray-200': !isActiveLesson
                    })}>
                        {props.title}
                    </strong>
                </span>
            </div>
        </Link>
)
}