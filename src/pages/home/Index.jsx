import React,{useRef,useCallback,useState} from 'react'

import logoHeader from '../../assets/images/hbo-max-logo-header.svg'

import imageSeparator from '../../assets/images/hero_promo_purpline.webp'

import './Style.scss'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bigBang from '../../assets/images/carrousel/big_bang_theory.webp'
import gentleman from '../../assets/images/carrousel/gentleman_jack.webp'
import hacks from '../../assets/images/carrousel/hacks_2.webp'
import laUnidad from '../../assets/images/carrousel/la_unidad.webp'
import legenedary from '../../assets/images/carrousel/legendary.webp'
import theBaby from '../../assets/images/carrousel/the_baby_1.webp'
import weOwn from '../../assets/images/carrousel/we_own_this_city.webp'

import KaleyCoco from '../../assets/images/flight-swiper/Kaley.webp'
import Zosia from '../../assets/images/flight-swiper/Zosia.webp'
import Rosei from '../../assets/images/flight-swiper/Rosie.webp'
import videoFlight from '../../assets/images/flight-swiper/video-thumbnail-dsk.webp'

import Deborah from '../../assets/images/hacks-swiper/deborah.webp'
import Ava from '../../assets/images/hacks-swiper/ava.webp'
import videoHacks from '../../assets/images/hacks-swiper/cover_video_hackss2_dsk.jpg'

import Colin from '../../assets/images/staircase-swiper/character-1.webp'
import Toni from '../../assets/images/staircase-swiper/character_2.webp'
import videoStaircase from '../../assets/images/staircase-swiper/cover_video_the_staircase_dsk.webp'

import Robert from '../../assets/images/batman-swiper/BATMAN-robert.webp'
import Zoe from '../../assets/images/batman-swiper/BATMAN-zoe.webp'
import ColinFarrell from '../../assets/images/batman-swiper/BATMAN-colin.webp'
import videoBatman from '../../assets/images/batman-swiper/batman.webp'

import logoMaxOriginals from '../../assets/images/maxOriginals/max_originals_1.png'
import SexLives from '../../assets/images/maxOriginals/the_sex_lives_of_college_girls.webp'
import hacksOrignals from '../../assets/images/maxOriginals/hacks_1.webp'
import hp from '../../assets/images/maxOriginals/harry_potter_reu_bpo.webp'
import theOtherTwo from '../../assets/images/maxOriginals/the-other-two-1200x675.webp'
import andThat from '../../assets/images/maxOriginals/ajlt_bpo.webp'
import gossip from '../../assets/images/maxOriginals/gossip_girl.webp'
import stationEleven from '../../assets/images/maxOriginals/station_eleven.webp'
import santa from '../../assets/images/maxOriginals/santa_inc.webp'

import baller from '../../assets/images/hbo/ballers.webp'
import euphoria from '../../assets/images/hbo/euphoria_1.webp'
import girls from '../../assets/images/hbo/girls_1.webp'
import hboLogo from '../../assets/images/hbo/hbo_1.webp'
import insecure from '../../assets/images/hbo/insecure_2.webp'
import landscapers from '../../assets/images/hbo/landscapers.webp'
import succession from '../../assets/images/hbo/succession_1.webp'
import theWhiteLotus from '../../assets/images/hbo/the_white_lotus.webp'
import wachtmen from '../../assets/images/hbo/watchmen.webp'

import logoWb from '../../assets/images/wb/wb_1.png'
import reminiscence from '../../assets/images/wb/reminiscence.webp'
import matrix from '../../assets/images/wb/matrix_iv_eng-bpo.webp'
import due from '../../assets/images/wb/dune_spa-bpo_1.webp'
import kingRichards from '../../assets/images/wb/king_richard_bpo.webp'
import bairro from '../../assets/images/wb/in_the_heights_bpo_1.webp'
import kimi from '../../assets/images/wb/kimi.webp'
import mk from '../../assets/images/wb/mortal_kombat.webp'
import tomAndJery from '../../assets/images/wb/tom_and_jerry_ny.webp'

import logoDc from '../../assets/images/dc/dc_1.png'
import stargirl from '../../assets/images/dc/stargirl.webp'
import peacemaker from '../../assets/images/dc/peacemaker_eng-spa.webp'
import justiceSociety from '../../assets/images/dc/justice_society.webp'
import batKid from '../../assets/images/dc/batkid.webp'
import naomi from '../../assets/images/dc/naomi.webp'
import supermanLois from '../../assets/images/dc/superman_and_lois.webp'
import batmanDarkKnight from '../../assets/images/dc/batman_the_dark_knight.webp'
import injustice from '../../assets/images/dc/injustice.webp'

import logoCn from '../../assets/images/cn/cn_1.webp'
import rickAndMorty from '../../assets/images/cn/rick_and_morty.png'
import regularShow from '../../assets/images/cn/regular_show.webp'
import adventureTime from '../../assets/images/cn/adventure_time.webp'
import dexter from '../../assets/images/cn/dexter_lab.webp'
import ben10Cn from '../../assets/images/cn/ben_10.webp'
import samuraiJack from '../../assets/images/cn/samurai_jack.webp'
import squirrel from '../../assets/images/cn/squirrel_boy.webp'
import stevenUniverse from '../../assets/images/cn/steven_universe.webp'

import backgroundTvs from '../../assets/images/br_devices_trophy.webp'
import ben10 from '../../assets/images/ben10.png'
import farmAndKid from '../../assets/images/fam_and_kids-looney_toons-img.webp'

import tv from '../../assets/images/fwk-device-bw-tv.png'
import tablet from '../../assets/images/fwk-device-bw-tablet.png'
import gameConsole from '../../assets/images/fwk-device-bw-game-console.webp'
import computer from '../../assets/images/fwk-device-bw-computer.png'

import { AiOutlineMobile,AiOutlineLeft,AiOutlineRight } from 'react-icons/ai'
import { BsTabletLandscape } from 'react-icons/bs'
import { MdOutlineDesktopWindows,MdOutlineLaptopWindows } from 'react-icons/md'

import { Swiper,SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper'

function Index() {
  const [index,setindex] = useState(1)
  const [indexChannel,setIndexChannel] = useState()
  const [chosedSlide,setChosedSlide] = useState()

  const sliderRef = useRef(null)
  const sliderRefChannel = useRef(null)
  const sliderCollectionRef = useRef(null)

  const handlePrevCollection = useCallback(() => {
    if (!sliderCollectionRef.current) return;
    sliderCollectionRef.current.swiper.slidePrev();
  }, []);

  const handleNextCollection = useCallback(() => {
    if (!sliderCollectionRef.current) return;
    sliderCollectionRef.current.swiper.slideNext();
  }, []);

  const handlePrevChannel = useCallback(() => {
    if (!sliderRefChannel.current) return;
    sliderRefChannel.current.swiper.slidePrev();
  }, []);

  const handleNextChannel = useCallback(() => {
    if (!sliderRefChannel.current) return;
    sliderRefChannel.current.swiper.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handleSlide = useCallback(e => {
    sliderRefChannel.current.swiper.slideTo(e.target.value);
    
  },[]);



  return (
    <div className="App-container">
      <header className='header-container'>
          <div className="logo-header-container">
            <img src={logoHeader} alt="logo da HBOMAX" />
          </div>
          <div className="buttons-header-container">
            <button className='join-button'>Entrar</button>
            <button className='plans-buttons'>Assine agora</button>
          </div>
      </header>
      <div className="first-container">
        <div className="text-first-container">
          <h1>Curta as melhores histórias</h1>
          <h2>Para todo mundo</h2>
          <img src={imageSeparator} alt="" />
          <h4>Assinaturas a partir de</h4>
          <div className="plans-first-container">
            <h2>R$14,16</h2>
            <span>/mês*</span>
          </div>
          <button>Assine Agora</button>
          <p>*aplicável ao plano anual com o pagamento antecipado</p>
        </div>
      </div>
      <div className="second-container">
        <div className="text-second-container">
          <h1>Escolha sua experiência HBO max</h1>
          <h3>Aproveite séries e fimes da HBO,Warner Bros,Max Originals e muito mais.</h3>
        </div>
        <div className="buttons-second-container">
          <div className="month-select">
            <p>1 Mês</p>
            <p>3 Meses</p>
            <p>12 Meses</p>
          </div>
          <div className="text">
            <p></p>
            <p>Mais escolhido</p>
            <p>Melhor valor</p>
          </div>
        </div>
        <div className="plans-container">
          <div className="mobile-plan-container">
            <div className="title-and-price-container">
              <h1>Mobile</h1>
              <h2>R$ 19,90<span>/mês</span></h2>
            </div>
            <div className="spec">
              <ul>
                <li>
                  <hr></hr>Smartphone e tablets</li>
                <li>1 tela de cada vex</li>
                <li>Qualidade padrão</li>
                <li>Baixe até 5 títulos</li>
              </ul>
            </div>
            <hr className="sepator"></hr>
            <div className="devices-includes">
              <AiOutlineMobile/>   
              <BsTabletLandscape/>   
              <p>Somente para smartphones e tablets</p>
            </div>
            <div className="button-select-plan">
              <button>Eu quero este plano</button>
            </div>
          </div>
          <div className="mult-screens-container">
          
            <div className="title-and-price-container">
              <h1>Multitelas</h1>
              <h2>R$ 27,90<span>/mês</span></h2>
            </div>
            <div className="spec">
              <ul>
                <li>Todos os seus dispositivos</li>
                <li>3 telas ao mesmo tempo</li>
                <li>Alte definição e tecnologia 4k</li>
                <li>Baixe até 30 títulos</li>
                <li>5 perfis diferentes</li>
              </ul>
            </div>
            <hr className="sepator"></hr>
            <div className="devices-includes">
              <AiOutlineMobile/>
              <BsTabletLandscape/>
              <MdOutlineDesktopWindows/>
              <MdOutlineDesktopWindows/>
              <p>Todos os dispositivos</p>
            </div>
            <div className="button-select-plan">
              <button>Eu quero este plano</button>
            </div>
          </div>
          
        </div>
      </div>
      <div className="third-container">
        <h1>Estreias que vão se transformar nos seus novos favoritos.</h1>
        <Swiper  
          ref={sliderRef}
          onSlideChange={
            (swiperCore)=>{
              const {
                activeIndex
              } = swiperCore;
              setindex(activeIndex+1)
            }
          }
        >
          <SwiperSlide>
              <div className="preview-third-container">
                <main>
                  <h1>Batman</h1>
                  <div className="available">
                    <p>Disponível agora</p>
                  </div>
                  <p>Ele é a vingança, ele é a noite. E não vai parar por nada para garantir que os criminosos de Gotham City enfrentem a justiça. </p>
                  <div className="actors-field">
                    <ul>
                      <li>
                        <img src={Robert} alt="Robert Pattinson interpretando Batman" />
                        <h2>Robert Pattinson</h2>
                        <h3>É Batman</h3>
                      </li>
                      <li>
                        <img src={Zoe} alt="Zoe Kravitz interpretando a Catwoman" />
                        <h2>Zoe Kravitz</h2>
                        <h3>É Catwoman</h3>
                      </li>
                      <li>
                        <img src={ColinFarrell} alt="Colin Farrell interpreatando o Pinguim" />
                        <h2>Colin Farrell</h2>
                        <h3>É Pinguim</h3>
                      </li>
                    </ul>
                  </div>
                </main>
                <aside>
                  <img src={videoBatman} alt="" />
                </aside>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="preview-third-container">
              <main>
                <h1>The Staircase</h1>
                <div className="available">
                  <p>Disponível 5 de maio</p>
                </div>
                <p>Quem matou Kathleen? As teorias são muitas, e ficam ainda mais estranhas quando você pergunta ao seu marido Michael...</p>
                <div className="actors-field">
                  <ul>
                    <li>
                      <img src={Colin} alt="Ator Colin Firth interpretando Michel Perterson" />
                      <h2>Colin Firth</h2>
                      <h3>É Michael Peterson</h3>
                    </li>
                    <li>
                      <img src={Toni} alt="Toni Colette interpretando Kathleen Peterson" />
                      <h2>Toni Colette</h2>
                      <h3>É Kathleen Peterson</h3>
                    </li>
                  </ul>
                </div>
              </main>
              <aside>
                <img src={videoStaircase} alt="Thumbnail do filme The Staircase" />
              </aside>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="preview-third-container">
              <main>
                <h1>Hacks Segunda Temporada</h1>
                <div className="available">
                  <p>Disponível 12 de Maio</p>
                </div>
                <p>Ava e Deborah podem não ser melhores amigas, mas agora precisam enfrentar o mundo mais unidas do que nunca.</p>
                <div className="actors-field">
                  <ul>
                    <li>
                      <img src={Deborah} alt="atriz Jean Smart interpretando Deborah Vance" />
                      <h2>Jean Smart</h2>
                      <h3>É Deborah Vance</h3>
                    </li>
                    <li>
                      <img src={Ava} alt="atriz Hannah Einbinder interpretando Ava Daniels" />
                      <h2>Hannah Einbinder</h2>
                    </li>
                  </ul>
                </div>
              </main>
              <aside>
                <img src={videoHacks} alt="" />
              </aside>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="preview-third-container">
              <main>
                <h1>The Flight Attendant <br/> Segunda Temporada</h1>
                <div className="available">
                  <p>Disponível agora</p>
                </div>
                <p>Cassie (Kaley Cuoco) vai precisar localizar todas as saídas de emergência para escapar de seus novos dilemas. Spoiler: vai ter muito humor e mistério. </p>
                <div className="actors-field">
                  <ul>
                    <li>
                      <img src={KaleyCoco} alt="atriz Kaley Cuocco interpretando a Cassei Bowden" />
                      <h2>Kaley Cuoco</h2>
                      <h3>É Cassie Bowden</h3>
                    </li>
                    <li>
                      <img src={Zosia} alt="atriz Zosia Namet interpretando Ani Mourandian" />
                      <h2>Zosia Namet</h2>
                      <h3>É Ani Mouradian</h3>
                    </li>
                    <li>
                      <img src={Rosei} alt="atriz Rosie Perez interpretando a Megan Briscoe" />
                      <h2>Rosei Perez</h2>
                      <h3>É Megan Briscoe</h3>
                    </li>
                  </ul>
                </div>
              </main>
              <aside>
                <img src={videoFlight} alt="Thumbnail do filme flighy Attendant" />
              </aside>
            </div>
          </SwiperSlide>
          <div className="infos-container">
            <button className="prev-arrow" onClick={handlePrev} >
            <AiOutlineLeft/>
            </button>
            <p>{index}/4</p>
            <button className="next-arrow" onClick={handleNext} >
              <AiOutlineRight/>
            </button>
          </div>
        </Swiper>

        <div className="button-field">
          <button>Assine Agora</button>
        </div>
      </div>
      <div className="fourth-container">
        <h1>Espisódios grátis da HBO Max, sem precisar de uma assinatura</h1>
        <div className="movies-collections">
        
          <div className="movies-swiper">
          <button className='button-prev-film' onClick={handlePrevCollection}><AiOutlineLeft/></button>
            <Swiper
              ref={sliderCollectionRef}
              slidesPerView={4}
              spaceBetween={1}
              
            >
              
              <div className="carrousel-container">
                <SwiperSlide className='film'>
                  <img src={bigBang} alt="" />
                  <h1>The Big Bang Theory</h1>
                  <p>Assitir grátis</p>
                </SwiperSlide>
                <SwiperSlide className='film'>
                  <img src={legenedary} alt="" />
                  <h1>Legendary</h1>
                  <p>Assistir grátis</p>
                </SwiperSlide>
                <SwiperSlide className='film'>
                  <img src={hacks} alt="" />
                  <h1>Hacks</h1>
                  <p>Assistir grátis</p>
                </SwiperSlide>
                <SwiperSlide className='film'>
                  <img src={weOwn} alt="" />
                  <h1>We Own this City</h1>
                  <p>Assistir grátis</p>
                </SwiperSlide>
                <SwiperSlide className='film'>
                  <img src={gentleman} alt="" />
                  <h1>Gentleman Jack</h1>
                  <p>Assistir grátis</p>
                </SwiperSlide>
                <SwiperSlide className='film'>
                  <img src={theBaby} alt="" />
                  <h1>The Baby</h1>
                  <p>Assistir grátis</p>
                </SwiperSlide>
                <SwiperSlide className='film'>
                  <img src={laUnidad} alt="" />
                  <h1>La Unidad</h1>
                  <p>Assistir grátis</p>
                </SwiperSlide>
              </div>
             
            </Swiper>
            <button className='button-next-film' onClick={handleNextCollection}><AiOutlineRight/></button>
          </div>
        </div>
        <div className="button-container">
          <button>Explorar mais</button>
        </div>
      </div>
      <div className="firth-container">
        <h1>Uma experiência simple e completa</h1>
        <h4>A compatibilidade varia de acordo com o plano.</h4>
        <div className="image-container">
          <img src={backgroundTvs} alt="" />
        </div>
        <div className="text-container">
          <ul>
            <li>
              <hr></hr>
              <p> Crie até perfis e receba recomendações personalizadas para cada um</p>
              </li>
            <li>
              <hr></hr>
              <p>
              Baixar qualquer conteúdo disponível para assisitr offilne
              </p>
            </li>
            <li>
              <hr></hr>
              <p>
              Defina o conterúdo que as crianças podem assiter de acordo com cada faixa etária
              </p>
            </li>
            <li>
              <hr></hr>
              <p>
              Adicione seus títulos favoritos para assistir quando quiser
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="sixth-container">
          <div className="content-container">
            <img className='ben10-img' src={ben10} alt="" />
            <h1>A HBO Max traz diversão para a família toda</h1>
            <img className='looney-img' src={farmAndKid} alt="" />
          </div>
      </div>
      <div className="seventh-container">
        <h1>Explore nossas Marcas Icônicas</h1>
        <div className="container-films">
          <div className="buttons-and-logo-container">
            <button onClick={handlePrevChannel}><AiOutlineLeft/></button>
            <img src={logoMaxOriginals} alt="" />
            <button onClick={handleNextChannel}><AiOutlineRight/></button>
          </div>
          <div className="channel-movies-container">
            <Swiper
              ref={sliderRefChannel}
              onSlideChange={
                (swiperCore)=>{
                  const {
                    activeIndex
                  } = swiperCore;
                  setIndexChannel(activeIndex+1)
                }
              }
            
            >
              <SwiperSlide
                className='individual-film'
              >
                <img src={SexLives} alt="" />
                <img src={hacksOrignals} alt="" />
                <img src={hp} alt="" />
                <img src={theOtherTwo} alt="" />
                <img src={andThat} alt="" />
                <img src={gossip} alt="" />
                <img src={stationEleven} alt="" />
                <img src={santa} alt="" />
              </SwiperSlide>
              <SwiperSlide
                className='individual-film'
              >
                <img src={baller} alt="" />
                <img src={euphoria} alt="" />
                <img src={girls} alt="" />
                <img src={insecure} alt="" />
                <img src={succession} alt="" />
                <img src={theWhiteLotus} alt="" />
                <img src={wachtmen} alt="" />
                <img src={landscapers} alt="" />
              </SwiperSlide>
              <SwiperSlide
                className='individual-film'
              >
                <img src={reminiscence} alt="" />
                <img src={matrix} alt="" />
                <img src={due} alt="" />
                <img src={kingRichards} alt="" />
                <img src={bairro} alt="" />
                <img src={kimi} alt="" />
                <img src={mk} alt="" />
                <img src={tomAndJery} alt="" />
              </SwiperSlide>
              <SwiperSlide
                className='individual-film'
              >
                <img src={stargirl} alt="" />
                <img src={peacemaker} alt="" />
                <img src={justiceSociety} alt="" />
                <img src={batKid} alt="" />
                <img src={naomi} alt="" />
                <img src={supermanLois} alt="" />
                <img src={batmanDarkKnight} alt="" />
                <img src={injustice} alt="" />
              </SwiperSlide>
              <SwiperSlide
                className='individual-film'
              >
                <img src={rickAndMorty} alt="" />
                <img src={regularShow} alt="" />
                <img src={adventureTime} alt="" />
                <img src={dexter} alt="" />
                <img src={ben10Cn} alt="" />
                <img src={samuraiJack} alt="" />
                <img src={squirrel} alt="" />
                <img src={stevenUniverse} alt="" />
              </SwiperSlide>
            </Swiper>
            
          </div>
          
        </div>
        <div className="buttons-container">
              <div className="button-select">
                <button value={0} onClick={handleSlide}>
                  <img src={logoMaxOriginals} alt="" />
                </button>
              </div>
              <div className="button-select">
                <button value={1} onClick={handleSlide}>
                  <img src={hboLogo} alt="" />
                </button>
              </div>
              <div className="button-select">
                <button value={2} onClick={handleSlide}>
                  <img src={logoWb} alt="" />
                </button>
              </div>
              <div className="button-select">
                <button value={3} onClick={handleSlide}>
                  <img src={logoDc} alt="" />
                </button>
              </div>
              <div className="button-select">
                <button value={4} onClick={handleSlide}>
                  <img src={logoCn} alt="" />
                </button>
              </div>
          </div>
      </div>
      <div className="eigth-container">
        <h1>Assista a HBO Max em seus dispositivos preferidos</h1>
        <h3>A compatiblidade varia de acordo com o plano.</h3>
        <div className="devices-container">
          <ul>
            <li className='item'>
              <img src={tv} alt="" />
              <h1>Smart TVs</h1>
              <hr />
              <ul>
                <li>Samsung</li>
                <li>LG</li>
                <li>Raku</li>
                <li>Android TV</li>
                <li>Apple TV</li>
                <li>Chromecast</li>
              </ul>
            </li>
            <li className='item'>
              <img src={computer} alt="" />
              <h1>Computadores</h1>
              <div className="separator">
                <hr />
              </div>
              <ul>
                <li>Chrome OS</li>
                <li>macOs</li>
                <li>Windows PC</li>
              </ul>
            </li>
            <li className='item'>
              <img src={gameConsole} alt="" />
              <h1>Video-games</h1>
              <hr />
              <ul>
                <li>PS5</li>
                <li>PS4</li>
                <li>Xbox One</li>
                <li>Xbox Series XIS</li>
              </ul>
            </li>
            <li className='item'>
              <img src={tablet}alt="" />
              <h1>Smartphone e Tablets</h1>
              <hr />
              <ul>
                <li>Android Phone &amp; Tablet</li>
                <li>iPhone &amp; iPad</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <div className="first-footer-container">
          <p>Em breve</p>
          <p>Filmes em destaque</p>
          <p>Séries</p>
          <p>Ajuda</p>
        </div>
        <div className="second-footer-container">
          <p>Privacidade</p>
          <p>Termos de uso</p>
          <p>Comunidade de impressa</p>
          <p>Contato de impressa</p>
          <p>Gerenciar preferências</p>
        </div>
        <div className="third-footer-container">
          <p>@ 2022WarnerMedia Direct Latin America, LLC. Todos os direitos reservados. HBO Max é usado sob licença.</p>
        </div>
        <div className="social-medias">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </footer>
    </div>
  );
}

export default Index;
