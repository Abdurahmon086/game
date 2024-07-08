import './App.css'
import bot from './assets/bot.png'
import credits from './assets/credits.png'
import emptyWr from './assets/empty-wr.png'
import empty from './assets/empty.png'
import full from './assets/full.png'
import gamerHand from './assets/gamer-hand.png'
import homeM from './assets/home-m.svg'
import imageS from './assets/img.png'
import menuM from './assets/menu.svg'
import nok from './assets/nok.png'
import elRight from './assets/Rectangle-right.png'
import el from './assets/Rectangle.png'
import stick from './assets/stick.png'
import tap from './assets/tap.png'

function App() {
	return (
		<div className='app'>
			<div className='app-wrapper'>
				<header className='head'>
					<div className='head-left'>
						<div className='head-left__inner head-inner'>
							<img src={homeM} alt='home icon' width={36} height={36} className='head-left__img' />
						</div>
						<h4 className='head-text head-left__text'>домой</h4>
					</div>
					<div className='head-main'>
						<img src={credits} alt='credits img' />
					</div>
					<div className='head-right'>
						<div className='head-right__inner head-inner'>
							<img src={menuM} alt='menu icon' width={36} height={36} className='head-right__img' />
						</div>
						<h4 className='head-text head-right__text'>Меню</h4>
					</div>
				</header>
				<main>
					<img src={bot} alt='bot image' className='bot-img' />
					<img src={nok} alt='nok image' className='nok-img' />
					<img src={gamerHand} alt='gamer hand image' className='hand-img' />
					<div className='main-inner'>
						<img src={stick} alt='stick image' />
						<img src={tap} alt='tap image' />
					</div>
				</main>
				<footer>
					<div className='foo'>
						<div className='foo-top'>
							<div className='foo-top__left'>
								<div className=''>
									<img src={el} alt='' />
								</div>
								<div className='foo-left__inner'>
									<h4 className='head-text' style={{ position: 'static' }}>
										обойма:
									</h4>
									<p className='foo-text'>1234</p>
								</div>
							</div>
							<img src={imageS} alt='image' />
							<div className='foo-top__right'>
								<div className=''>
									<img src={elRight} alt='' />
								</div>
								<div className='foo-right__inner'>
									<h4 className='head-text' style={{ position: 'static' }}>
										мощность:
									</h4>
									<p className='foo-text'>1234</p>
								</div>
							</div>
						</div>
						<div className='foo-bottom'>
							<img src={emptyWr} alt='empty wrapper image' />
							<img src={empty} alt='empty image' />
							<img src={full} alt='full image' />
						</div>
					</div>
				</footer>
			</div>
		</div>
	)
}

export default App
