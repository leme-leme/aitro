export type Lang = 'nl' | 'en';

export const translations = {
	nl: {
		nav: {
			home: 'Home',
			approach: 'Aanpak',
			services: 'Diensten',
			training: 'Training',
			cases: 'Cases',
			contact: 'Contact'
		},
		hero: {
			title: 'AI in de zorg die echt gebruikt wordt',
			subtitle: 'Met een systematische aanpak realiseer je AI die daadwerkelijk werkt, snel en verantwoord.',
			body: 'Ik help zorgorganisaties en softwarebedrijven in de zorg om AI-toepassingen te realiseren. Betrouwbare oplossingen die meer dan 2 miljoen keer per jaar worden gebruikt.',
			cta: 'Neem contact op'
		},
		extended: `Bijna geen enkele AI-toepassing wordt daadwerkelijk gebruikt in de zorg. De meeste AI-ideeën stranden ergens tussen idee en implementatie. Niet omdat de technologie niet werkt, maar omdat organisaties starten zonder een gevalideerde systematiek om AI veilig en effectief toe te passen in de zorg.

Het gevolg is dat ontwikkeling traag verloopt en toepassingen in de praktijk onvoldoende betrouwbaar zijn. Dat leidt tot stilstaande pilots en gemiste zorgwaarde.

Met ervaring in het daadwerkelijk implementeren van AI in de huisartsenzorg, apothekenzorg, jeugdzorg en ziekenhuiszorg weet ik wat er nodig is om AI te laten werken in de praktijk. Ik heb organisaties en teams begeleid bij het realiseren van AI-toepassingen die inmiddels op grote schaal worden gebruikt.

Je hoeft het wiel niet opnieuw uit te vinden. Door samen te werken met een bewezen en gevalideerde aanpak kun je AI veilig, snel en effectief realiseren — met aantoonbare waarde voor zorgprofessionals en patiënten.`,
		services: {
			title: 'Diensten',
			discovery: {
				name: 'Discovery',
				subtitle: 'Ontdekken',
				desc: 'In 10 dagen brengen we de kansen in kaart en kiezen we samen de use-case die binnen zo snel mogelijk waarde kan leveren.',
				items: ['Probleemverkenning met gebruikers en stakeholders', 'Selectie en ranken van use-cases', 'Feature roadmap met implementatie plan']
			},
			development: {
				name: 'Development',
				subtitle: 'Ontwikkelen',
				desc: 'We begeleiden in de implementatie naar een gevalideerde AI-feature direct in je product.',
				items: ['Begeleiding bij model-keuze, prompts en infrastructuur', 'Iteratief ontwikkelen aan de hand van een validatie dataset', 'Feedback van gebruikers omzetten in verbeteringen']
			},
			operating: {
				name: 'Operating',
				subtitle: 'Overdragen',
				desc: 'Bouw een herhaalbaar proces waarmee je team systematisch nieuwe AI-features kan ontwikkelen.',
				items: ['Training van medewerkers in systematische AI ontwikkeling', 'Toegang tot frameworks, checklists en templates', 'Doorlopend advies bij opkomende vragen']
			}
		},
		training: {
			title: 'Training',
			dev: {
				name: 'Voor ontwikkelaars',
				desc: 'Eendaagse training voor ontwikkelaars, product-owners en data-teams die zelf AI-features willen bouwen. Je leert hoe je veilig en meetbaar waardevolle AI-functionaliteit ontwikkelt.',
				items: ['Van idee naar gevalideerde feature in 6 stappen', 'Opstellen van AI requirements', 'Test- en validatiekaders in de praktijk', 'Documentatie en traceability volgens AI-wet', 'Integratie van model monitoring en feedback loops']
			},
			healthcare: {
				name: 'Voor zorgteams',
				desc: 'Voor teams in de zorg die AI willen inzetten binnen hun werkprocessen of systemen.',
				items: ['AI-wet en risicoclassificatie voor zorgtoepassingen', 'Framework voor toetsing en validatie', 'Governance van AI toepassingen', 'Inrichting van governance en AI-wasstraat']
			}
		},
		cases: {
			title: 'Cases',
			coming: 'Case studies komen binnenkort.'
		},
		contact: {
			title: 'Contact',
			body: 'Neem contact op om te bespreken hoe AI waarde kan toevoegen aan jouw zorgorganisatie.',
			email: 'E-mail'
		},
		footer: '© {year} Aitro. AI in de zorg die echt gebruikt wordt.',
		stats: {
			used: '2M+ keer per jaar gebruikt',
			sectors: 'Huisarts-, apotheek-, jeugd- & ziekenhuiszorg',
			approach: 'Bewezen systematische aanpak'
		}
	},
	en: {
		nav: {
			home: 'Home',
			approach: 'Approach',
			services: 'Services',
			training: 'Training',
			cases: 'Cases',
			contact: 'Contact'
		},
		hero: {
			title: 'AI in healthcare that actually gets used',
			subtitle: 'A systematic approach to build AI that truly works — fast and responsibly.',
			body: 'I help healthcare organizations and software companies in healthcare realize AI applications. Reliable solutions used more than 2 million times per year.',
			cta: 'Get in touch'
		},
		extended: `Almost no AI application actually gets used in healthcare. Most AI ideas stall somewhere between concept and implementation. Not because the technology doesn't work, but because organizations start without a validated methodology to apply AI safely and effectively in healthcare.

The result is slow development and applications that are insufficiently reliable in practice. This leads to stalled pilots and missed healthcare value.

With experience in actually implementing AI in GP care, pharmacy, youth care, and hospital care, I know what it takes to make AI work in practice. I have guided organizations and teams in realizing AI applications that are now used at scale.

You don't have to reinvent the wheel. By working together with a proven and validated approach, you can realize AI safely, quickly, and effectively — with demonstrable value for healthcare professionals and patients.`,
		services: {
			title: 'Services',
			discovery: {
				name: 'Discovery',
				subtitle: 'Explore',
				desc: 'In 10 days we map out the opportunities and together choose the use case that can deliver value as quickly as possible.',
				items: ['Problem exploration with users and stakeholders', 'Selection and ranking of use cases', 'Feature roadmap with implementation plan']
			},
			development: {
				name: 'Development',
				subtitle: 'Build',
				desc: 'We guide the implementation toward a validated AI feature directly in your product.',
				items: ['Guidance on model choice, prompts, and infrastructure', 'Iterative development based on a validation dataset', 'Converting user feedback into improvements']
			},
			operating: {
				name: 'Operating',
				subtitle: 'Transfer',
				desc: 'Build a repeatable process so your team can systematically develop new AI features.',
				items: ['Training employees in systematic AI development', 'Access to frameworks, checklists, and templates', 'Ongoing advisory for emerging questions']
			}
		},
		training: {
			title: 'Training',
			dev: {
				name: 'For developers',
				desc: 'One-day training for developers, product owners, and data teams who want to build their own AI features. Learn how to develop valuable AI functionality safely and measurably.',
				items: ['From idea to validated feature in 6 steps', 'Defining AI requirements', 'Testing and validation frameworks in practice', 'Documentation and traceability per the AI Act', 'Integration of model monitoring and feedback loops']
			},
			healthcare: {
				name: 'For healthcare teams',
				desc: 'For teams in healthcare who want to deploy AI within their workflows or systems.',
				items: ['AI Act and risk classification for healthcare applications', 'Assessment and validation framework', 'AI application governance', 'Setting up governance and AI review processes']
			}
		},
		cases: {
			title: 'Cases',
			coming: 'Case studies coming soon.'
		},
		contact: {
			title: 'Contact',
			body: 'Get in touch to discuss how AI can add value to your healthcare organization.',
			email: 'Email'
		},
		footer: '© {year} Aitro. AI in healthcare that actually gets used.',
		stats: {
			used: 'Used 2M+ times per year',
			sectors: 'GP, pharmacy, youth & hospital care',
			approach: 'Proven systematic approach'
		}
	}
} as const;

export function t(lang: Lang) {
	return translations[lang];
}

export function langFromUrl(url: URL): Lang {
	return url.pathname.startsWith('/en') ? 'en' : 'nl';
}

export function localePath(lang: Lang, path: string): string {
	if (lang === 'en') return `/en${path}`;
	return path;
}

export function switchLangPath(currentPath: string, toLang: Lang): string {
	const stripped = currentPath.replace(/^\/en/, '') || '/';
	return toLang === 'en' ? `/en${stripped}` : stripped;
}
