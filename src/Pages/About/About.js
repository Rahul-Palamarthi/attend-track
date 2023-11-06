import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
	return (
		<Fragment>
			<section className='about'>
				<div className='about-wrapper'>
					<p className='about-intro'>
						Hi, my name is Rahul Palamarthi. I'm a Enthusiastic, Hungry Developer and Designer from India. Since 2021 I have been working on Open
						Source Projects.
					</p>
					<p className='about-outro'>This is my Playgrounds where you find all my Projects.Hope you will enjoy it.</p>
					<strong>{'>_'} Rahul Palamrthi</strong>
					<ul className='about-links-wrapper'>
						<li>
							<Link to={'https://github.com/rahu1gg'} target='_blank' rel='noreferrer'>
								github
							</Link>
						</li>
						<li>
							<Link to={'https://www.linkedin.com/in/rahul-palamarthi/'} target='_blank' rel='noreferrer'>
								linkedin
							</Link>
						</li>
					</ul>
				</div>
			</section>
		</Fragment>
	);
}
