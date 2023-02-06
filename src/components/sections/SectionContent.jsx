import clsx from 'clsx';

function SectionContent({children}) {
    return (
        <div className={clsx('pb-20 content-wrapper')}>{children}</div>
    );
}

export default SectionContent;
