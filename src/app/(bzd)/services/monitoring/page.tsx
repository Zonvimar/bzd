import React, {Suspense} from 'react'
import ServicesHeader from "@/components/widgets/ServicesHeader";
import PackingOfSafetyBags from "@/components/widgets/PackingOfSafetyBags";
import AdditionalServices from "@/components/widgets/AdditionalServices";
import PickupConditions from "@/components/widgets/PickupConditions";
import {Check} from "lucide-react";
import {Image} from "@nextui-org/react";

const Page = async() => {

    return (
        <Suspense>
            <div className={'flex flex-col gap-6'}>
                <ServicesHeader
                    title={'Геодезический мониторинг'}
                    description={'Проводим геодезический и автоматизированный (с применением собственного оборудования) мониторинг\n' +
                        'за состоянием объектов железнодорожной\n' +
                        'инфраструктуры.'}
                    withModal={false}
                    // defaultValue={'monitoring'}
                />
                <div
                    className={'w-full mx-auto flex flex-col max-w-7xl px-2 lg:px-8 gap-4'}>
                    <div className={'flex flex-col gap-2'}>
                        <h2 className={'text-3xl font-bold'}>
                            Системы автоматизированного деформационного мониторинга (АСДМ)
                        </h2>
                    </div>
                    <div className={'flex justify-between w-full gap-6'}>
                        <div className={'w-full flex justify-center gap-3 flex-col'}>
                            <p>
                                Контроль стабильности потенциально опасных объектов и прогнозирования их поведения
                                являются очень важной задачей. Вместе с тем существует большое количество уже
                                построенных стратегически важных объектов, таких как плотины, дамбы, ГЭС, АЭС,
                                телевизионные вышки, старение конструкций которых требует особого внимания.
                                Мы также должны заботиться о сохранности исторических памятников и сооружений,
                                представляющих культурную ценность. Кроме того такие природные явления, движения
                                земной коры, оползни, вулканы, землетрясения нуждаются в изучении для создания методов
                                прогнозирования и предупреждения чрезвычайных ситуаций. Мониторинг состояния природных
                                объектов и искусственных сооружений в наши дни является необходимостью и неотъемлемой
                                частьюсистемы обеспечения безопасности.
                            </p>
                            <p>
                                Основой мониторинга деформаций зданий, сооружений, являются серии наблюдений сделанных
                                на протяжении времени для определения пространственных изменений геометрических
                                параметров объектов в одном, двух или трех измерениях, а также во времени.
                                При этом скорости и ускорения являются производными.
                            </p>
                        </div>
                        <div className={'flex justify-center h-[70%]'}>
                            <Image
                                src={'/monitoring/img.png'}
                                width={'100%'}
                                height={'75%'}
                                className={'object-cover hidden lg:block'} removeWrapper
                            />
                        </div>
                    </div>
                    {/*/*/}
                    <div className={'flex flex-col gap-2'}>
                        <h2 className={'text-3xl font-bold'}>
                            Геомониторинг проводится
                        </h2>
                    </div>
                    <div className={'flex justify-between w-full gap-6'}>
                        <div className={'w-full flex justify-start gap-3 flex-col'}>
                            <p>
                                Перед началом строительства (мониторинг массива грунта, в том числе и уровня подземных
                                вод, и сооружений окружающей застройки).
                                На начальном этапе строительства (мониторинг ограждающих конструкций котлована
                                с момента экскавации грунта).
                                В процессе возведения надземной части здания или сооружения для контроля вертикальных
                                перемещений (осадок) и отклонений от вертикали (кренов).
                                В течение одного года после ввода объекта в эксплуатацию.
                            </p>
                            <p>
                                Геодезический мониторинг призван обеспечивать безопасное возведение новых
                                строительных объектов, а также эксплуатационную надежность реконструируемых зданий
                                и новостроек.
                            </p>
                            <div className={'flex flex-col gap-2'}>
                                <p className={'font-bold'}>Геомониторинг проводится в соответствии с нормативами:</p>
                                <p className={'flex gap-2 items-center'}>
                                    <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                                    СП 22.13330.2016 «СНиП 2.02.01-83. Основания зданий и сооружений».
                                </p>
                                <p className={'flex gap-2 items-center'}>
                                    <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                                    ГОСТ 24846-2019 «Грунты Методы измерений деформаций оснований зданий и сооружений».
                                </p>
                                <p className={'flex gap-2 items-center'}>
                                    <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                                    Постановление Правительства Москвы за № 857 (от 7 декабря 2004 года).
                                </p>

                            </div>
                        </div>
                        <div className={'flex justify-center h-[70%]'}>
                            <Image
                                src={'/monitoring/img_1.png'}
                                width={'100%'}
                                height={'75%'}
                                className={'object-cover hidden lg:block'} removeWrapper
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default Page