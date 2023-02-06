import clsx from 'clsx';

import {GitHubIcon, TwitterIcon} from 'src/components/Icons';
import NavIcon from 'src/components/navigations/NavIcon';
import NavIconTheme from 'src/components/navigations/NavIconTheme';
import NavLinkDropdown from 'src/components/navigations/NavLinkDropdown';
import NavLinkExpanded from 'src/components/navigations/NavLinkExpanded';
import NavLogo from 'src/components/navigations/NavLogo';

import useOnScroll from 'src/hooks/useOnScroll';

const workLinks = [
    {title: 'Post', href: '/work/skills-and-tools'}
];

function Navbar() {
    const isScrolled = useOnScroll(0);

    return (
        <header
            className={clsx('fixed right-0 left-0 z-[1000] transition', [
                isScrolled ? 'translate-y-0' : 'translate-y-2',
            ])}
        >
            <div className={clsx("content-wrapper")}>
                <div
                    className={clsx(
                        'border-divider-light pointer-events-none fixed top-0 left-0 right-0 h-16 border-b bg-white/70 backdrop-blur transition',
                        'dark:border-divider-dark dark:bg-rdark/50',
                        [isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0']
                    )}
                />
                <div className={clsx('content-wrapper-max')}>
                    <div
                        className={clsx(
                            'relative z-50 flex h-16 items-center justify-between text-sm',
                        )}
                    >
                        <nav className={clsx('flex', 'md:gap-2')} data-accent="violet">
                            <NavLogo href="/" title="Home"/>
                            <ul className={clsx('flex items-center', 'md:gap-1')}>
                                <li className={clsx('lg:hidden')} data-accent="blue">
                                    <NavLinkDropdown title="Work" items={workLinks}/>
                                </li>
                                <li className={clsx('hidden lg:block')} data-accent="blue">
                                    <NavLinkExpanded title="Work" items={workLinks}/>
                                </li>
                            </ul>
                        </nav>
                        <ul className={clsx('flex items-center gap-2')}>
                            <li className={clsx('sm:block')}>
                                <NavIcon
                                    href="https://twitter.com/rfkokt"
                                    icon={<TwitterIcon className={clsx('h-5 w-5')}/>}
                                    title="Twitter"
                                />
                            </li>
                            <li className={clsx('sm:block')}>
                                <NavIcon
                                    href="https://github.com/rfkokt"
                                    icon={<GitHubIcon className={clsx('h-5 w-5')}/>}
                                    title="GitHub"
                                    label="rfkokt"
                                />
                            </li>
                            <li className={clsx( 'sm:block')}>
                                <div
                                    className={clsx(
                                        'h-3 w-[1px] bg-slate-200',
                                        'dark:bg-slate-700'
                                    )}
                                />
                            </li>
                            <li className={clsx('mr-2')}>
                                <NavIconTheme/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
