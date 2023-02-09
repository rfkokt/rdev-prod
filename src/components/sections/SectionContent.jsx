import clsx from 'clsx';

function SectionContent({children}) {
    return (
        <div className={clsx('content-wrapper')}>{children}</div>
    );
}

export default SectionContent;
