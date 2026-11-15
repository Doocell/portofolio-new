# Bugfix Requirements Document

## Introduction

The portfolio implementation in Next.js (`portfolio-nextjs`) does not match the design from Stitch project (ID: 13637916826545699573, Screen ID: 53978dbc18344e1e94b96b884134dfb8). This causes significant visual inconsistencies affecting the neo-brutalist design aesthetic, which relies on precise implementation of hard shadows, ultra-rounded borders, exact color tokens, and playful doodle elements.

The bug impacts the entire user experience, making the portfolio appear unprofessional and inconsistent with the approved design system. This is a high-severity issue blocking deployment.

**Bug Condition Definition:**

The portfolio exhibits design mismatches when any of the following conditions are met:

```pascal
FUNCTION isBugCondition(X)
  INPUT: X of type PortfolioElement
  OUTPUT: boolean
  
  RETURN (
    hasSoftShadows(X) OR
    usesWrongIcons(X) OR
    hasIncorrectColors(X) OR
    hasMissingElements(X) OR
    hasWrongBorderRadius(X) OR
    hasWrongTypography(X) OR
    hasMissingDividers(X) OR
    hasIncompleteStructure(X)
  )
END FUNCTION
```

Where:
- **F**: Current Next.js implementation (buggy)
- **F'**: Fixed implementation matching Stitch design exactly

**Property Specification:**
```pascal
// Property: Fix Checking - Design Match
FOR ALL X WHERE isBugCondition(X) DO
  result ← renderElement'(X)
  ASSERT matchesStitchDesign(result) AND 
         hasHardShadows(result) AND 
         usesMaterialIcons(result) AND
         hasExactColors(result)
END FOR
```

**Preservation Goal:**
```pascal
// Property: Preservation Checking
FOR ALL X WHERE NOT isBugCondition(X) DO
  ASSERT F(X) = F'(X)
END FOR
```

Elements that already match the Stitch design should remain unchanged.

---

## Bug Analysis

### Current Behavior (Defect)

#### 1. Shadow Implementation Issues

1.1 WHEN rendering cards, buttons, or badges THEN the system uses CSS box-shadow with blur radius (e.g., `shadow-lg`, `shadow-xl`) creating soft shadows instead of hard neo-brutalist shadows

1.2 WHEN rendering elevated elements THEN the system applies gradient-based shadows with opacity transitions instead of solid black offset shadows

1.3 WHEN rendering hero section elements THEN the system inconsistently applies shadow styles with some elements having correct hard shadows while others have soft shadows

#### 2. Icon System Issues

1.4 WHEN rendering icons throughout the portfolio THEN the system uses Heroicons library instead of Google Material Symbols Outlined

1.5 WHEN rendering filled icon variants THEN the system cannot display filled icons because Heroicons does not support font variation settings for FILL parameter

1.6 WHEN rendering icons in service cards and navigation THEN the system displays different icon shapes than specified in Stitch design

#### 3. Color Token Issues

1.7 WHEN applying primary color THEN the system uses `#0027ac` instead of the correct `#1F3FD1` (royal blue)

1.8 WHEN applying secondary color THEN the system uses incorrect shade variations instead of exact `#E8402F` (signal red)

1.9 WHEN applying tertiary color THEN the system uses `#cda700` for container instead of correct `#FFD21F` (sunburst yellow) for fixed variant

1.10 WHEN applying surface background THEN the system uses `#fdf9f1` instead of correct `#FAF6EE` (warm cream)

#### 4. Border Radius Issues

1.11 WHEN rendering buttons and pills THEN the system uses standard rounded corners instead of ultra-rounded `9999px` (full capsule) style

1.12 WHEN rendering cards THEN the system uses `1.5rem` border-radius instead of varying radii (`1.5rem` to `2rem`) based on card importance

1.13 WHEN rendering small badges THEN the system uses inconsistent border-radius values not matching the roundness level 3 specification

#### 5. Typography Issues

1.14 WHEN rendering display headlines THEN the system uses incorrect font-weight (700-800) instead of exact 900 weight specified in design system

1.15 WHEN rendering body text THEN the system uses DM Sans 400 correctly but label text uses incorrect weight (should be 700)

1.16 WHEN rendering headlines on mobile THEN the system does not properly scale down from 3.5rem to 2.25rem as specified

#### 6. Layout Structure Issues

1.17 WHEN rendering the about section THEN the system displays simplified content without avatar, skills checklist, and bio cards as shown in Stitch

1.18 WHEN rendering testimonials section THEN the system omits speech bubble cards with blue background entirely

1.19 WHEN rendering process section THEN the system displays incomplete structure without the 5 horizontal step cards

1.20 WHEN rendering footer THEN the system omits the 4-column layout with newsletter form

#### 7. Wavy Divider Issues

1.21 WHEN transitioning between sections THEN the system either omits wavy dividers or renders them with incorrect SVG path data

1.22 WHEN displaying wavy dividers THEN the system uses wrong colors that don't match the section transitions (e.g., surface to tertiary-fixed)

1.23 WHEN rendering dividers on mobile THEN the system does not adjust divider height from 4rem desktop to 3rem mobile

#### 8. Doodles & Stickers Issues

1.24 WHEN rendering hero section THEN the system omits floating sparkle/star SVG decorations shown in Stitch design

1.25 WHEN rendering testimonials THEN the system omits speech bubble tail SVG elements

1.26 WHEN rendering badges THEN the system applies fixed rotation instead of varied rotations (-6° to +6°) for playful effect

1.27 WHEN rendering hero photo blob THEN the system omits floating stickers (lightning bolt, heart, crown icons) around the photo

#### 9. Border Thickness Issues

1.28 WHEN rendering standard elements THEN the system uses `2.5px` border correctly but inconsistently applies to all elements

1.29 WHEN rendering cards THEN the system does not consistently use `3px` solid borders as specified

1.30 WHEN rendering hero elements THEN the system does not apply thicker `3.5px` borders to emphasize importance

#### 10. Responsive Behavior Issues

1.31 WHEN viewing on mobile (< 640px) THEN the system does not properly scale typography from desktop sizes

1.32 WHEN viewing on tablet (640-1023px) THEN the system applies incorrect grid layouts for service and work cards

1.33 WHEN viewing on mobile THEN the system does not adjust spacing, padding, and shadow offsets appropriately

---

### Expected Behavior (Correct)

#### 1. Shadow Implementation

2.1 WHEN rendering cards, buttons, or badges THEN the system SHALL use hard offset shadows with zero blur: standard `4px 4px 0px #111111`, elevated `6px 6px 0px #111111`, hero `8px 8px 0px #111111`

2.2 WHEN rendering any elevated element THEN the system SHALL apply solid black (#111111) offset shadows without any blur or opacity transitions

2.3 WHEN user hovers over interactive elements THEN the system SHALL animate shadow offset (e.g., `4px 4px` to `6px 6px`) while maintaining zero blur

#### 2. Icon System

2.4 WHEN rendering icons throughout the portfolio THEN the system SHALL use Google Material Symbols Outlined font family exclusively

2.5 WHEN rendering filled icon variants THEN the system SHALL apply `fontVariationSettings: '"FILL" 1'` style property to display filled icons

2.6 WHEN rendering icons THEN the system SHALL match exact icon names from Stitch HTML (e.g., `lightbulb`, `draw`, `laptop_mac`, `verified`, `build`, `stars`, `waving_hand`)

#### 3. Color Tokens

2.7 WHEN applying primary color THEN the system SHALL use exact `#1F3FD1` for primary-container

2.8 WHEN applying secondary color THEN the system SHALL use exact `#E8402F` for secondary-container

2.9 WHEN applying tertiary color THEN the system SHALL use `#FFD21F` for tertiary-fixed background

2.10 WHEN applying surface background THEN the system SHALL use `#FAF6EE` instead of `#fdf9f1`

2.11 WHEN applying all Material Design 3 color tokens THEN the system SHALL match the complete token set from Stitch design system

#### 4. Border Radius

2.12 WHEN rendering buttons, pills, and navigation items THEN the system SHALL use `border-radius: 9999px` for full capsule shape

2.13 WHEN rendering large cards (work, services) THEN the system SHALL use `border-radius: 1.5rem` to `2rem`

2.14 WHEN rendering small badges and tags THEN the system SHALL use `border-radius: 1rem` to `1.5rem`

2.15 WHEN rendering the hero photo blob THEN the system SHALL use organic blob shape with border-radius formula `42%_58%_70%_30%/45%_45%_55%_55%`

#### 5. Typography

2.16 WHEN rendering display headlines (h1) THEN the system SHALL use Rubik font-weight 900, size 3.5rem on desktop, 2.25rem on mobile

2.17 WHEN rendering headline elements (h2, h3) THEN the system SHALL use Rubik font-weight 700-800 as specified per element

2.18 WHEN rendering body text THEN the system SHALL use DM Sans font-weight 400-500

2.19 WHEN rendering label text THEN the system SHALL use DM Sans font-weight 700 with uppercase and increased letter-spacing

#### 6. Layout Structure

2.20 WHEN rendering the about section THEN the system SHALL include yellow background (#FFD21F), avatar with blob frame, bio text, and skills checklist with checkmark icons

2.21 WHEN rendering testimonials section THEN the system SHALL include 3 speech bubble cards with tails on blue background (#1F3FD1)

2.22 WHEN rendering process section THEN the system SHALL include 5 horizontal step cards with numbered badges and descriptions

2.23 WHEN rendering footer THEN the system SHALL include 4 columns (About, Quick Links, Services, Newsletter) with newsletter form having email input and submit button

#### 7. Wavy Dividers

2.24 WHEN transitioning from surface to tertiary-fixed section THEN the system SHALL render wavy SVG divider with path `M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,60 L1200,120 L0,120 Z` and color matching destination section

2.25 WHEN transitioning between all colored sections THEN the system SHALL render 6 wavy dividers total with unique path data for each transition

2.26 WHEN displaying dividers on mobile THEN the system SHALL use height `3rem` (48px) instead of desktop `4rem` (64px)

2.27 WHEN rendering dividers THEN the system SHALL use `preserveAspectRatio="none"` to stretch wave across full viewport width

#### 8. Doodles & Stickers

2.28 WHEN rendering hero section THEN the system SHALL include floating sparkle/star SVG elements positioned absolutely with specific colors (secondary, tertiary-fixed-dim, primary-container)

2.29 WHEN rendering testimonial cards THEN the system SHALL include speech bubble tail SVG positioned at bottom-left or bottom-right with 45° rotation

2.30 WHEN rendering badges throughout THEN the system SHALL apply varied rotations using `rotate-1`, `rotate-2`, `-rotate-2`, `rotate-6`, `-rotate-6` classes

2.31 WHEN rendering hero photo blob THEN the system SHALL include 4 floating stickers: speech bubble (top-left), lightning bolt (top-right), heart (bottom-right), badge (bottom-left)

2.32 WHEN rendering CTA section THEN the system SHALL include decorative emoji scattered with opacity-30 (✨, ⭐, ⚡)

#### 9. Border Thickness

2.33 WHEN rendering standard elements (badges, small cards, inputs) THEN the system SHALL use `border-width: 2.5px` with `solid` style and `#1c1c17` color

2.34 WHEN rendering medium cards (services, work, testimonials) THEN the system SHALL use `border-width: 3px`

2.35 WHEN rendering hero elements (main buttons, photo blob, large cards) THEN the system SHALL use `border-width: 3.5px`

#### 10. Responsive Behavior

2.36 WHEN viewing on mobile (< 640px) THEN the system SHALL scale display text from 3.5rem to 2.25rem, headline-lg from 2.5rem to 1.75rem

2.37 WHEN viewing on tablet (640-1023px) THEN the system SHALL use 2-column grid for service cards and 1-column grid for work cards

2.38 WHEN viewing on mobile THEN the system SHALL reduce shadow offsets by 25% (e.g., `4px 4px` becomes `3px 3px`) and reduce padding accordingly

---

### Unchanged Behavior (Regression Prevention)

#### 3. Interactive States

3.1 WHEN user hovers over buttons THEN the system SHALL CONTINUE TO translate elements with `-translate-x-0.5 -translate-y-0.5` and increase shadow offset

3.2 WHEN user clicks buttons THEN the system SHALL CONTINUE TO translate elements with `translate-x-1 translate-y-1` and remove shadow for pressed effect

3.3 WHEN user hovers over cards THEN the system SHALL CONTINUE TO translate vertically with `-translate-y-1`

#### 4. Navigation Behavior

3.4 WHEN user scrolls THEN the system SHALL CONTINUE TO maintain sticky header at top with z-index 50

3.5 WHEN user clicks navigation links THEN the system SHALL CONTINUE TO scroll smoothly to corresponding section IDs

3.6 WHEN user is viewing a section THEN the system SHALL CONTINUE TO highlight corresponding navigation item with active state (tertiary-fixed background)

#### 5. Layout Responsiveness

3.7 WHEN viewport width exceeds 1440px THEN the system SHALL CONTINUE TO constrain content with `max-w-[1440px]` and center with `mx-auto`

3.8 WHEN viewport width is below 1024px THEN the system SHALL CONTINUE TO show mobile navigation toggle (if implemented)

3.9 WHEN content is centered THEN the system SHALL CONTINUE TO use consistent horizontal padding (`px-5` mobile, `px-12` desktop)

#### 6. Typography Rendering

3.10 WHEN rendering any text THEN the system SHALL CONTINUE TO apply antialiasing with `antialiased` class

3.11 WHEN rendering headlines THEN the system SHALL CONTINUE TO use appropriate line-height and letter-spacing as defined in typography scale

3.12 WHEN text overflows containers THEN the system SHALL CONTINUE TO handle overflow gracefully without breaking layout

#### 7. Performance & Accessibility

3.13 WHEN page loads THEN the system SHALL CONTINUE TO use Next.js client-side rendering with "use client" directive

3.14 WHEN fonts load THEN the system SHALL CONTINUE TO use Google Fonts with `display=swap` parameter to prevent layout shift

3.15 WHEN user uses keyboard navigation THEN the system SHALL CONTINUE TO provide visible focus states on interactive elements

#### 8. SVG & Graphics

3.16 WHEN rendering SVG icons THEN the system SHALL CONTINUE TO use currentColor for fill/stroke to inherit text color

3.17 WHEN rendering SVG dividers THEN the system SHALL CONTINUE TO use `preserveAspectRatio="none"` for proper stretching

3.18 WHEN SVG elements are decorative THEN the system SHALL CONTINUE TO apply `pointer-events-none` to prevent interaction

#### 9. Tailwind Configuration

3.19 WHEN building the project THEN the system SHALL CONTINUE TO use Tailwind CSS with extended theme configuration

3.20 WHEN applying custom utilities THEN the system SHALL CONTINUE TO use extended spacing, font-family, and color tokens from tailwind.config.ts

3.21 WHEN optimizing for production THEN the system SHALL CONTINUE TO purge unused CSS classes based on content paths

#### 10. Project Structure

3.22 WHEN organizing files THEN the system SHALL CONTINUE TO use Next.js App Router structure with `app/page.tsx` as main entry

3.23 WHEN importing fonts THEN the system SHALL CONTINUE TO use `@import` statements in `globals.css`

3.24 WHEN configuring build THEN the system SHALL CONTINUE TO use existing `next.config.js`, `tsconfig.json`, and `postcss.config.js` without modification
