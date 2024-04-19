import React from 'react';

type IconButtonProps = {
    src: string,
    href: string,
    children: React.ReactNode,
    style?:  React.CSSProperties,
}

const IconButton = ({ src, href, children, style }: IconButtonProps): React.ReactNode => (
    <a style={styles.wrapper} href={href}>
        <div style={{...styles.button, ...style}}>
            <img src={src} style={styles.icon}/>
            <span className="text" style={styles.text}>
                {children}
            </span>
        </div>
    </a>
);

const styles = {    
    wrapper: {
        display: 'inline-block',
        textDecoration: 'none',
        color: 'white',
    },
    button: {
        backgroundColor: 'transparent',
        width: 'fit-content',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        borderWidth: 1,
        borderColor: 'white',
        borderStyle: 'solid',

        padding: 8,
        borderRadius: 8,
        gap: 8,
    },
    icon: {
        height: 30,
        width: 30,
    },
    text: {
        fontSize: 16,
    }
};

export default IconButton;