/**
 * Subtle Motion Design System
 * 
 * Principles:
 * - Use opacity + small Y-axis movement only
 * - Mobile-safe values (smaller distances)
 * - Smooth easing (easeOut for entrance)
 * - Respect reduced motion preferences
 * - Enhance hierarchy, not distract
 */

// Easing presets for smooth, natural motion
const EASING = {
    smooth: [0.25, 0.1, 0.25, 1], // Smooth ease-out
    gentle: [0.33, 0, 0.67, 1],   // Gentle cubic
    subtle: [0.4, 0, 0.2, 1],     // Very subtle
} as const;

// Duration presets (mobile-optimized)
const DURATION = {
    fast: 0.3,
    normal: 0.5,
    slow: 0.7,
} as const;

// Distance presets (mobile-safe)
const DISTANCE = {
    small: 12,   // Subtle movement
    medium: 20,  // Standard movement
    large: 30,   // Maximum movement
} as const;

/**
 * Fade in with subtle upward movement
 * Best for: Hero content, section headers
 */
export const fadeInUp = {
    hidden: { opacity: 0, y: DISTANCE.medium },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION.normal,
            ease: EASING.smooth
        }
    },
};

/**
 * Gentle fade in with minimal movement
 * Best for: Cards, list items, secondary content
 */
export const fadeInUpGentle = {
    hidden: { opacity: 0, y: DISTANCE.small },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION.normal,
            ease: EASING.gentle
        }
    },
};

/**
 * Simple fade in (no movement)
 * Best for: Backgrounds, images, subtle elements
 */
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: DURATION.slow,
            ease: EASING.subtle
        }
    },
};

/**
 * Fast fade in for quick reveals
 * Best for: Tooltips, small UI elements
 */
export const fadeInFast = {
    hidden: { opacity: 0, y: DISTANCE.small },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION.fast,
            ease: EASING.smooth
        }
    },
};

/**
 * Stagger container for sequential reveals
 * Best for: Lists, grids, feature cards
 */
export const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,  // Subtle stagger
            delayChildren: 0.1,    // Small initial delay
        },
    },
};

/**
 * Stagger container with faster timing
 * Best for: Small lists, navigation items
 */
export const staggerContainerFast = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0,
        },
    },
};

/**
 * Slide in from left (minimal movement)
 * Best for: Side content, alternating layouts
 */
export const slideInLeft = {
    hidden: { x: -DISTANCE.medium, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: DURATION.normal,
            ease: EASING.smooth
        }
    },
};

/**
 * Slide in from right (minimal movement)
 * Best for: Side content, alternating layouts
 */
export const slideInRight = {
    hidden: { x: DISTANCE.medium, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: DURATION.normal,
            ease: EASING.smooth
        }
    },
};

/**
 * Scale in (MOBILE-SAFE: minimal scale)
 * Use sparingly - only for emphasis
 * Best for: CTA buttons, important cards
 */
export const scaleInSubtle = {
    hidden: { scale: 0.97, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: DURATION.normal,
            ease: EASING.gentle
        }
    },
};

/**
 * Viewport animation config
 * Consistent settings for scroll-triggered animations
 */
export const viewportConfig = {
    once: true,           // Animate only once
    margin: "-50px",      // Trigger slightly before visible
    amount: 0.2,          // Trigger when 20% visible
};

/**
 * Hover animation presets (subtle)
 * For interactive elements
 */
export const hoverLift = {
    rest: { y: 0 },
    hover: {
        y: -4,
        transition: {
            duration: 0.2,
            ease: EASING.smooth
        }
    },
};

export const hoverGlow = {
    rest: { opacity: 0.9 },
    hover: {
        opacity: 1,
        transition: {
            duration: 0.2
        }
    },
};
