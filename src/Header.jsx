import SearchInput from "./SearchInput"
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Header = () => {
    return (
        <>
            <header className="p-4 bg-white shadow-lg fixed top-0 left-0 w-full z-50">
                <div className="flex justify-between container mx-auto">
                    <div className="flex items-center gap-5">
                        <img className="mb-2" src="public/logo.svg" alt="logo" />
                        <a href="#">Вакансии</a>
                        <a href="#">FAQ</a>
                        <a href="#">Контакты</a>
                    </div>
                    <div className="flex gap-6">
                        <button className="bg-[#EFEFEF] rounded-full border-2 border-[#DDDDDD] text-[#00000080] px-11
                         text-sm font-semibold hover:text-black">Войти</button>
                        <button className="bg-[#4A6DFF] rounded-full text-white px-11
                         text-sm font-semibold hover:text-black">Регистрация</button>
                    </div>
                </div>
            </header>

            <div className="bg-gradient-to-br from-[#dde4ff] h-[100vh] to-white flex justify-center items-center px-[5%] pt-[142px]" >
                <div className="flex flex-col">
                    <h1 className="font-bold text-5xl text-[#343642]">ПОИСК РАБОТЫ ПО <br /> ВСЕМУ КЫРГЫЗСТАНУ</h1>
                    <SearchInput></SearchInput>
                    <div className="mt-[3vh] flex items-baseline">
                        <p className="text-sm">Часто ищут:</p>
                        <div className="mx-2 flex flex-col gap-2">
                            <div className="flex gap-3">
                                <button style={{ backgroundColor: '#4A6DFF0D' }}
                                    className="text-xs border-2 border-[#4A6DFF] text-[#4A6DFF] rounded-full p-2">Информационные технологии</button>
                                <button style={{ background: '#F037370D' }}
                                    className="text-xs border-2 border-[#F03737] text-[#F03737] rounded-full p-2 w-[14vh]">Бухгалтерия</button>
                                <button style={{ background: '#9C22B00D' }}
                                    className="text-xs border-2 border-[#9C22B0] text-[#9C22B0] rounded-full p-2">Искусство, развлечение </button>
                            </div>
                            <div className="flex gap-3">
                                <button style={{ backgroundColor: '#FFCC000D' }} className="text-xs border-2 border-[#FFCC00] text-[#FFCC00] rounded-full p-2">Маркетинг и PR </button>
                                <button style={{ background: '#2EB9FF0D' }}
                                    className="text-xs border-2 border-[#2EB9FF] text-[#2EB9FF] rounded-full p-2">Административный персонал</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="w-[652px]" src="public/40devs1.png" alt="girl" />
                </div>
            </div>


            <section className="flex flex-col">
                <div className="flex flex-col gap-6 px-[30vh] mt-12 ">
                    <h2 className="font-semibold text-4xl">Последние вакансии</h2>
                    <p className="font-normal text-lg">Найдите работу, которая соответствует вашим требованиям</p>
                </div>

                <div className="flex flex-col gap-6 mt-14  items-center justify-center">
                    <div style={{ backgroundColor: 'rgba(249, 249, 249, 0.8)' }} className="flex p-8 border-2 border-[#E7E7E7] rounded-3xl">
                        <div><img src="public/comany1.svg" alt="company" /></div>
                        <div className="flex gap-14 mx-6">
                            <div className="flex flex-col">
                                <h3 className="font-medium text-[#C2C2C2] text-sm">КОМПАНИЯ</h3>
                                <p className="font-normal text-lg">Fortylines IO</p>
                                <div className="flex gap-1">
                                    <img src="public/40devs-locatioin.svg" alt="locatioin" />
                                    <p className="text-[#C2C2C2]">Кыргызстан, Бишкек</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-medium text-[#C2C2C2] text-sm">ДОЛЖНОСТЬ</h3>
                                <p className="font-normal text-lg">Менеджер по продажам</p>
                                <div className="flex gap-1">
                                    <img src="public/40devs-work.svg" alt="work" />
                                    <p className="text-[#C2C2C2]">Информационный технологии</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-medium text-[#C2C2C2] text-sm">ОКЛАД</h3>
                                <p className="font-normal text-lg">50 000 Сом</p>
                                <div className="flex gap-1">
                                    <img src="public/40devs-work.svg" alt="work" />
                                    <p className="text-[#C2C2C2]">Полная занятость</p>
                                </div>
                            </div>
                            <div className="flex flex-col pb-12">
                                <h3 className="font-medium text-[#C2C2C2] text-sm">ОПЫТ РАБОТЫ</h3>
                                <p className="font-normal text-lg">От 1 до 3 лет</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(249, 249, 249, 0.8)' }} className="flex p-8 border-2 border-[#E7E7E7] rounded-3xl">
                        <div><img src="public/comany1.svg" alt="company" /></div>
                        <div className="flex gap-14 mx-6">
                            <div className="flex flex-col">
                                <h3 className="font-medium text-[#C2C2C2] text-sm">КОМПАНИЯ</h3>
                                <p className="font-normal text-lg">Fortylines IO</p>
                                <div className="flex gap-1">
                                    <img src="public/40devs-locatioin.svg" alt="locatioin" />
                                    <p className="text-[#C2C2C2]">Кыргызстан, Бишкек</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-medium text-[#C2C2C2] text-sm">ДОЛЖНОСТЬ</h3>
                                <p className="font-normal text-lg">Менеджер по продажам</p>
                                <div className="flex gap-1">
                                    <img src="public/40devs-work.svg" alt="work" />
                                    <p className="text-[#C2C2C2]">Информационный технологии</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-medium text-[#C2C2C2] text-sm">ОКЛАД</h3>
                                <p className="font-normal text-lg">50 000 Сом</p>
                                <div className="flex gap-1">
                                    <img src="public/40devs-work.svg" alt="work" />
                                    <p className="text-[#C2C2C2]">Полная занятость</p>
                                </div>
                            </div>
                            <div className="flex flex-col pb-12">
                                <h3 className="font-medium text-[#C2C2C2] text-sm">ОПЫТ РАБОТЫ</h3>
                                <p className="font-normal text-lg">От 1 до 3 лет</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(249, 249, 249, 0.8)' }} className="flex p-8 border-2 border-[#E7E7E7] rounded-3xl">
                        <div><img src="public/comany1.svg" alt="company" /></div>
                        <div className="flex gap-14 mx-6">
                            <div className="flex flex-col">
                                <h3 className="font-medium text-[#C2C2C2] text-sm">КОМПАНИЯ</h3>
                                <p className="font-normal text-lg">Fortylines IO</p>
                                <div className="flex gap-1">
                                    <img src="public/40devs-locatioin.svg" alt="locatioin" />
                                    <p className="text-[#C2C2C2]">Кыргызстан, Бишкек</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-medium text-[#C2C2C2] text-sm">ДОЛЖНОСТЬ</h3>
                                <p className="font-normal text-lg">Менеджер по продажам</p>
                                <div className="flex gap-1">
                                    <img src="public/40devs-work.svg" alt="work" />
                                    <p className="text-[#C2C2C2]">Информационный технологии</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-medium text-[#C2C2C2] text-sm">ОКЛАД</h3>
                                <p className="font-normal text-lg">50 000 Сом</p>
                                <div className="flex gap-1">
                                    <img src="public/40devs-work.svg" alt="work" />
                                    <p className="text-[#C2C2C2]">Полная занятость</p>
                                </div>
                            </div>
                            <div className="flex flex-col pb-12">
                                <h3 className="font-medium text-[#C2C2C2] text-sm">ОПЫТ РАБОТЫ</h3>
                                <p className="font-normal text-lg">От 1 до 3 лет</p>
                            </div>
                        </div>
                    </div>

                    <button className="mt-10 bg-[#4A6DFF] text-white p-3 px-6 rounded-full flex items-center justify-center gap-1">
                        Посмотреть все вакансии
                        <img src="public/arrow_forward_ios.svg" alt="" />
                    </button>

                </div>
            </section>

            <section className="mt-[20vh] bg-[#F4F6FF]">
                <div className="font-semibold text-4xl mb-20 w-[1300px] px-[6.5%] pt-14">
                    <h2>Популярные категории</h2>
                </div>

                <div className="grid grid-cols-3 gap-4 w-[1300px] mx-auto">
                    <div style={{ background: "rgba(249, 249, 249, 0.8)" }} className="flex flex-col rounded-3xl border-2 overflow-hidden w-[95%]">
                        <img className="w-[16%]" src="public/fiol.svg" alt="fiol" />

                        <div className="flex flex-col px-[15%] pb-8 pt-0">
                            <p>Искусство, развлечение</p>
                            <p className="text-[#5C5B5B] font-normal">35 вакансий</p>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-3xl border-2 overflow-hidden w-[95%]">
                        <img className="w-[16%]" src="public/fiol.svg" alt="fiol" />

                        <div className="flex flex-col px-[15%] pb-8 pt-0">
                            <p>Искусство, развлечение</p>
                            <p className="text-[#5C5B5B] font-normal">35 вакансий</p>
                        </div>
                    </div>

                    <div style={{ background: "rgba(249, 249, 249, 0.8)" }} className="flex flex-col rounded-3xl border-2 overflow-hidden w-[95%]">
                        <img className="w-[16%]" src="public/fiol.svg" alt="fiol" />

                        <div className="flex flex-col px-[15%] pb-8 pt-0">
                            <p>Искусство, развлечение</p>
                            <p className="text-[#5C5B5B] font-normal">35 вакансий</p>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-3xl border-2 overflow-hidden w-[95%]">
                        <img className="w-[16%]" src="public/fiol.svg" alt="fiol" />

                        <div className="flex flex-col px-[15%] pb-8 pt-0">
                            <p>Искусство, развлечение</p>
                            <p className="text-[#5C5B5B] font-normal">35 вакансий</p>
                        </div>
                    </div>

                    <div style={{ background: "rgba(249, 249, 249, 0.8)" }} className="flex flex-col rounded-3xl border-2 overflow-hidden w-[95%]">
                        <img className="w-[16%]" src="public/fiol.svg" alt="fiol" />

                        <div className="flex flex-col px-[15%] pb-8 pt-0">
                            <p>Искусство, развлечение</p>
                            <p className="text-[#5C5B5B] font-normal">35 вакансий</p>
                        </div>
                    </div>

                    <div style={{ background: "rgba(249, 249, 249, 0.8)" }} className="flex flex-col rounded-3xl border-2 overflow-hidden w-[95%]">
                        <img className="w-[16%]" src="public/fiol.svg" alt="fiol" />

                        <div className="flex flex-col px-[15%] pb-8 pt-0">
                            <p>Искусство, развлечение</p>
                            <p className="text-[#5C5B5B] font-normal">35 вакансий</p>
                        </div>
                    </div>

                    <div style={{ background: "rgba(249, 249, 249, 0.8)" }} className="flex flex-col rounded-3xl border-2 overflow-hidden w-[95%]">
                        <img className="w-[16%]" src="public/fiol.svg" alt="fiol" />

                        <div className="flex flex-col px-[15%] pb-8 pt-0">
                            <p>Искусство, развлечение</p>
                            <p className="text-[#5C5B5B] font-normal">35 вакансий</p>
                        </div>
                    </div>

                    <div style={{ background: "rgba(249, 249, 249, 0.8)" }} className="flex flex-col rounded-3xl border-2 overflow-hidden w-[95%]">
                        <img className="w-[16%]" src="public/fiol.svg" alt="fiol" />

                        <div className="flex flex-col px-[15%] pb-8 pt-0">
                            <p>Искусство, развлечение</p>
                            <p className="text-[#5C5B5B] font-normal">35 вакансий</p>
                        </div>
                    </div>

                    <div style={{ background: "rgba(249, 249, 249, 0.8)" }} className="flex flex-col rounded-3xl border-2 overflow-hidden w-[95%]">
                        <img className="w-[16%]" src="public/fiol.svg" alt="fiol" />

                        <div className="flex flex-col px-[15%] pb-8 pt-0">
                            <p>Искусство, развлечение</p>
                            <p className="text-[#5C5B5B] font-normal">35 вакансий</p>
                        </div>
                    </div>

                    <div className="pt-4 pb-6">здесь должен быть слайдер</div>
                </div>
            </section>


            <section className="pb-32 pt-32">
                <div className="flex gap-4 justify-center">
                    <div style={{ background: "rgba(54, 66, 173, 1)" }} className="border-2 relative rounded-2xl overflow-hidden h-72 w-[80vh]">
                        <img className="absolute top-0 right-0 z-0 h-[75%] w-[70%]" src="public/blue.svg" alt="blue" />
                        <img className="absolute top-0 right-0 z-0 h-[100%]" src="public/man.png" alt="man" />

                        <div className="flex items-center pt-12 justify-center w-[45vh]">
                            <div className="flex flex-col justify-center w-[30vh] gap-4">
                                <h3 className="font-semibold text-white text-2xl">Работодатель</h3>
                                <p className="font-light text-white">Ищете в свою команду <br /> новых людей?</p>
                                <button className="p-3 bg-white rounded-full font-medium">Зарегистрироваться</button>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div >

                    <div style={{ background: "rgba(84, 189, 149, 1)" }} className="border-2 relative rounded-2xl overflow-hidden h-72 w-[80vh]">
                        <img className="absolute top-20 right-0 z-0 h-[75%] w-[70%]" src="public/white.png" alt="white" />
                        <img className="absolute top-4 right-10 z-0 h-[95%]" src="public/man2.png" alt="man2" />

                        <div className="flex items-center pt-12 justify-center w-[45vh]">
                            <div className="flex flex-col justify-center w-[30vh] gap-4">
                                <h3 className="font-semibold text-white text-2xl">Соискатель</h3>
                                <p className="font-light text-white">Ищете достойную <br />
                                    работу?</p>
                                <button className="p-3 bg-white rounded-full font-medium">Зарегистрироваться</button>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div >
                </div>
            </section >


            <footer className="bg-[#F4F6FF]">
                <div className="flex gap-5 pt-12 pb-12 px-16">
                    <div>
                        <img src="public/logo.svg" alt="logo" />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg">Контакты</h3>
                        <div className="mt-2 flex flex-col gap-1">
                            <a className="text-[#5C5B5B] text-sm" href="">Кыргызстан, г. Бишкек</a>
                            <a className="text-[#5C5B5B] text-sm" href="">ул. Токтогула 112/1</a>
                            <a className="text-[#5C5B5B] text-sm" href="">+996 (706) 11 22 33</a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg">Соискателям</h3>
                        <div className="mt-2 flex flex-col gap-1">
                            <a className="text-[#5C5B5B] text-sm" href="">Личный кабинет</a>
                            <a className="text-[#5C5B5B] text-sm" href="">Опубликовать вакансии</a>
                            <a className="text-[#5C5B5B] text-sm" href="">Кандидаты</a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg">Работодателям</h3>
                        <div className="mt-2 flex flex-col gap-1">
                            <a className="text-[#5C5B5B] text-sm" href="">Личный кабинет</a>
                            <a className="text-[#5C5B5B] text-sm" href="">Опубликовать вакансии</a>
                            <a className="text-[#5C5B5B] text-sm" href="">Кандидаты</a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg">Меню</h3>
                        <div className="mt-2 flex flex-col gap-1">
                            <a className="text-[#5C5B5B] text-sm" href="">Вакансии</a>
                            <a className="text-[#5C5B5B] text-sm" href="">FAQ</a>
                            <a className="text-[#5C5B5B] text-sm" href="">Контакты</a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg">Поддержка</h3>
                        <div className="mt-2 flex flex-col gap-1">
                            <a className="text-[#5C5B5B] text-sm" href="">Правила размещения вакансий</a>
                            <a className="text-[#5C5B5B] text-sm" href="">Политика конфиденциальности</a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg">Оставить заявку</h3>
                        <div className="mt-2 flex flex-col gap-1">
                            <input type="text" placeholder="Ваше имя" className="p-2 rounded-md border-2 w-80 text-sm" />
                            <input type="text" placeholder="Ваше номер телефона" className="p-2 rounded-md border-2 w-80 text-sm" />
                            <input type="text" placeholder="Сообщение" className="p-2 rounded-md border-2 w-80 text-sm" />
                            <div className="flex justify-end mt-3">
                                <button className="rounded-full bg-[#4A6DFF] text-white text-sm p-2 w-32">Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around pb-4">
                    <div>
                        <p className="font-light text-sm text-[#a8a4a4]"> &copy; 2023 DevsFactory All Right Reserved</p>
                    </div>
                    <div className="flex gap-5">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600">
                            <FaYoutube size={24} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Header