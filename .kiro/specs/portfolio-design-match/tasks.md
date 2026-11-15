# Implementation Plan

## Overview

Implementasi bugfix untuk mencocokkan portfolio Next.js dengan Stitch design system (Project ID: 13637916826545699573). Fix mencakup 3 files dengan 9 root causes: shadow system, icon migration, color tokens, borders, typography, structure, wavy dividers, doodles, dan font loading.

---

## Phase 1: Exploratory Testing (Write Tests BEFORE Fix)

- [ ] 1. Write bug condition exploration test
  - **Property 1: Bug Condition** - Design Elements Diverge from Stitch
  - **CRITICAL**: This test MUST FAIL on unfixed code - failure confirms the bugs exist
  - **DO NOT attempt to fix the test or the code when it fails**
  - **NOTE**: This test encodes the expected Stitch-matching design - it will validate the fix when it passes after implementation
  - **GOAL**: Surface counterexamples that demonstrate the 9 design bugs exist
  - **Scoped PBT Approach**: Test concrete failing cases for each root cause (shadows, icons, colors, borders, typography, structure, dividers, doodles)
  - Create visual regression test suite using Playwright with screenshot comparison
  - Test implementation details from Bug Condition in design:
    - **Shadow System**: Capture button/card shadows and assert zero blur (will FAIL - shows soft shadows)
    - **Icon System**: Inspect service card icons and assert Material Symbols class (will FAIL - shows Heroicons)
    - **Color Tokens**: Capture computed RGB for primary-container and assert rgb(31, 63, 209) (will FAIL - shows wrong hex)
    - **Border Radius**: Measure button border-radius and assert 9999px (will FAIL - shows 0.5rem/8px)
    - **Typography Weight**: Check headline font-weight and assert 900 (will FAIL - shows 700-800)
    - **Structure Completeness**: Count About section DOM elements and assert 3 columns (avatar, bio, checklist) (will FAIL - shows missing elements)
    - **Wavy Dividers**: Query for SVG dividers between sections and assert 6 exist (will FAIL - shows 0)
    - **Doodle Elements**: Query for floating decorations in hero and assert 8+ elements (will FAIL - shows 0)
    - **Border Thickness**: Check card borders and assert 3px thickness (will FAIL - shows 1-2px)
  - Run test on UNFIXED code
  - **EXPECTED OUTCOME**: Test FAILS on all 9 assertions (this is correct - it proves the bugs exist)
  - Document counterexamples found:
    - Buttons: `box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1)` (blur detected)
    - Icons: `<svg>` elements from Heroicons, not `<span className="material-symbols-outlined">`
    - Primary-container: computed `rgb(0, 39, 172)` not `rgb(31, 63, 209)`
    - Button border-radius: `8px` not `9999px`
    - Headline weight: `700` not `900`
    - About section: 1 column not 3 columns
    - SVG dividers: 0 found, expected 6
    - Hero doodles: 0 found, expected 8+
  - Mark task complete when test is written, run, and 9 failures are documented
  - _Requirements: 2.1-2.38_

---

## Phase 2: Preservation Testing (Write Tests BEFORE Fix)

- [ ] 2. Write preservation property tests (BEFORE implementing fix)
  - **Property 2: Preservation** - Interactive Behavior Unchanged
  - **IMPORTANT**: Follow observation-first methodology
  - Observe behavior on UNFIXED code for non-design interactions:
    - Button hover: translates with `-translate-x-0.5 -translate-y-0.5`
    - Button click: translates with `translate-x-1 translate-y-1` and removes shadow
    - Card hover: translates with `-translate-y-1`
    - Nav link click: smooth scrolls to section
    - Nav active state: highlights with tertiary-fixed background
    - Header scroll: sticks to top with z-50
    - Responsive breakpoints: layout switches at 640px, 1024px, 1440px
    - Max-width: constrained to 1440px
    - Mobile nav: toggle button works
    - Keyboard focus: visible focus rings on tab navigation
  - Write property-based tests with Playwright capturing observed behavior patterns:
    - **Hover State Test**: For all interactive buttons/cards, verify hover transforms persist
    - **Click Effect Test**: For all clickable buttons, verify click transforms persist
    - **Navigation Test**: For all nav links, verify smooth scroll and active highlighting persist
    - **Layout Responsiveness Test**: For all breakpoints (375px, 768px, 1440px), verify layout structure persists
    - **Keyboard Navigation Test**: For all focusable elements, verify tab order and focus rings persist
  - Property-based testing generates many test cases for stronger preservation guarantees
  - Run tests on UNFIXED code
  - **EXPECTED OUTCOME**: All preservation tests PASS (this confirms baseline behavior to preserve)
  - Mark task complete when preservation tests are written, run, and passing on unfixed code
  - _Requirements: 3.1-3.24_

---

## Phase 3: Implementation

- [ ] 3. Fix for portfolio design mismatch

  ### 3A: Tailwind Configuration Update (Foundation)

  - [ ] 3.1 Replace complete color system with MD3 tokens
    - Open `tailwind.config.ts`
    - Replace entire `colors` object in `theme.extend` with 60+ MD3 tokens from Stitch:
      ```typescript
      colors: {
        "outline-variant": "#c5c5d7",
        "inverse-on-surface": "#f4f0e8",
        "on-primary-container": "#b9c2ff",
        "surface-variant": "#e6e2da",
        "on-tertiary": "#ffffff",
        "inverse-primary": "#bac3ff",
        "tertiary-container": "#cda700",
        "surface-tint": "#314ddd",
        "on-error": "#ffffff",
        "on-background": "#1c1c17",
        "surface-container-highest": "#e6e2da",
        "on-primary-fixed-variant": "#0530c6",
        "on-secondary": "#ffffff",
        "tertiary": "#725c00",
        "surface": "#fdf9f1",
        "on-surface": "#1c1c17",
        "on-error-container": "#ffdad6",
        "on-surface-variant": "#48483c",
        "inverse-surface": "#313026",
        "on-tertiary-container": "#583900",
        "on-tertiary-fixed-variant": "#583900",
        "on-secondary-container": "#ffffff",
        "tertiary-fixed-dim": "#e9c400",
        "on-primary": "#ffffff",
        "surface-container-low": "#f7f3eb",
        "primary-fixed-dim": "#bac3ff",
        "error-container": "#ff5449",
        "primary": "#314ddd",
        "secondary-fixed-dim": "#ffa9ab",
        "on-secondary-fixed": "#ffffff",
        "outline": "#79796c",
        "on-primary-fixed": "#00105c",
        "surface-container": "#f1ede5",
        "secondary-container": "#e8402f",
        "on-tertiary-fixed": "#241a00",
        "surface-dim": "#dfdbd3",
        "error": "#ba1a1a",
        "tertiary-fixed": "#ffdf6f",
        "secondary": "#cc3426",
        "on-secondary-fixed-variant": "#8f0014",
        "secondary-fixed": "#ffdad6",
        "scrim": "#000000",
        "surface-container-lowest": "#ffffff",
        "surface-bright": "#fdf9f1",
        "primary-fixed": "#dee0ff",
        "primary-container": "#1f3fd1",
        "tertiary-fixed-dim": "#e9c400"
      }
      ```
    - Verify no existing color references are removed (preserve any custom project colors if they exist)
    - _Bug_Condition: isBugCondition(input) where input.colorTokenMismatch() returns true_
    - _Expected_Behavior: All color utilities resolve to exact MD3 hex values from Stitch_
    - _Preservation: Existing color references in non-portfolio components remain functional_
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10_

  - [ ] 3.2 Update border radius system for neo-brutalist style
    - Add/update `borderRadius` in `theme.extend`:
      ```typescript
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px"
      }
      ```
    - _Bug_Condition: isBugCondition(input) where input.borderRadiusMismatch() returns true_
    - _Expected_Behavior: Buttons use rounded-full (9999px), cards use rounded-[1.5rem] or rounded-[2rem]_
    - _Preservation: Existing border radius classes in non-portfolio components work identically_
    - _Requirements: 2.11, 2.12_

  - [ ] 3.3 Add spacing tokens from Stitch design system
    - Add `spacing` in `theme.extend`:
      ```typescript
      spacing: {
        "margin": "3rem",
        "margin-mobile": "1.25rem",
        "space-xl": "2.5rem",
        "gutter-mobile": "1rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "gutter": "1.5rem",
        "space-sm": "0.5rem",
        "space-xs": "0.25rem"
      }
      ```
    - _Expected_Behavior: Consistent spacing matches Stitch design token values_
    - _Preservation: Default Tailwind spacing scale (0-96) remains available_
    - _Requirements: 2.13_

  - [ ] 3.4 Add typography scale (font families and sizes)
    - Add `fontFamily` in `theme.extend`:
      ```typescript
      fontFamily: {
        "body-sm": ["DM Sans"],
        "label-md": ["DM Sans"],
        "body-md": ["DM Sans"],
        "body-lg": ["DM Sans"],
        "headline-lg": ["Rubik"],
        "headline-md": ["Rubik"],
        "display": ["Rubik"],
        "headline-lg-mobile": ["Rubik"],
        "display-mobile": ["Rubik"],
        "headline-sm": ["Rubik"],
        "label-lg": ["DM Sans"],
        "label-sm": ["DM Sans"]
      }
      ```
    - Add `fontSize` in `theme.extend`:
      ```typescript
      fontSize: {
        "body-sm": ["0.875rem", {lineHeight: "1.5", letterSpacing: "0.01em", fontWeight: "400"}],
        "label-md": ["0.8125rem", {lineHeight: "1.2", letterSpacing: "0.03em", fontWeight: "700"}],
        "body-md": ["1rem", {lineHeight: "1.5", letterSpacing: "0.01em", fontWeight: "400"}],
        "body-lg": ["1.125rem", {lineHeight: "1.5", letterSpacing: "0.01em", fontWeight: "400"}],
        "headline-lg": ["2rem", {lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "900"}],
        "headline-md": ["1.75rem", {lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "800"}],
        "display": ["3.5rem", {lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "900"}],
        "headline-lg-mobile": ["1.5rem", {lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "900"}],
        "display-mobile": ["2.25rem", {lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "900"}],
        "headline-sm": ["1.5rem", {lineHeight: "1.3", letterSpacing: "0", fontWeight: "800"}],
        "label-lg": ["0.875rem", {lineHeight: "1.2", letterSpacing: "0.03em", fontWeight: "700"}],
        "label-sm": ["0.75rem", {lineHeight: "1.2", letterSpacing: "0.03em", fontWeight: "700"}]
      }
      ```
    - _Bug_Condition: isBugCondition(input) where input.typographyWeightMismatch() returns true_
    - _Expected_Behavior: Display uses weight 900, headlines use 800-900, labels use 700_
    - _Preservation: Default Tailwind font size scale remains available_
    - _Requirements: 2.14, 2.15_

  - [ ] 3.5 Verify Tailwind configuration compiles without errors
    - Run `npm run build` or `npm run dev` to verify config changes
    - Check for TypeScript type errors in config file
    - Confirm no Tailwind JIT compilation errors
    - _Preservation: Build process and development server startup remain functional_
    - _Requirements: 3.19, 3.20, 3.21_

  ### 3B: Global Styles Update (Font Loading)

  - [ ] 3.6 Add Material Symbols font import to globals.css
    - Open `app/globals.css`
    - Insert after existing font imports (after DM Sans and Rubik):
      ```css
      @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
      ```
    - Verify Rubik import includes weights 300-900
    - Verify DM Sans import includes weights 100-1000
    - _Bug_Condition: isBugCondition(input) where Material Icons font not loaded_
    - _Expected_Behavior: Material Symbols font loads with font variation settings support_
    - _Preservation: Existing font loading strategy (display=swap) remains unchanged_
    - _Requirements: 2.16, 2.17, 3.13, 3.14_

  ### 3C: Page Component Reconstruction (Structure & Styling)

  - [ ] 3.7 Update Header component with hard shadows and Material icons
    - Replace header shadow: `shadow-[0_4px_0_0_#1c1c17]`
    - Update navigation pills: change from `rounded-lg` to `rounded-full`
    - Active nav state styling:
      ```tsx
      className="bg-tertiary-fixed text-on-tertiary-fixed border-[2px] border-on-surface shadow-[2px_2px_0_0_#1c1c17] rounded-full px-4 py-2 font-label-md text-label-md"
      ```
    - CTA button styling:
      ```tsx
      className="bg-primary text-on-primary border-[2.5px] border-on-surface shadow-[4px_4px_0_0_#1c1c17] rounded-full px-6 py-2.5 font-label-md text-label-md hover:shadow-[6px_6px_0_0_#1c1c17] hover:-translate-x-0.5 hover:-translate-y-0.5"
      ```
    - _Bug_Condition: isBugCondition(input) where input.hasSoftShadows() OR input.borderRadiusMismatch() returns true_
    - _Expected_Behavior: Header uses hard shadows with zero blur and ultra-rounded borders_
    - _Preservation: Sticky header behavior (3.4), navigation behavior (3.5-3.6), hover states (3.1) remain unchanged_
    - _Requirements: 2.18, 2.19, 2.20, 2.21, 3.1, 3.4, 3.5, 3.6_

  - [ ] 3.8 Rebuild Hero section with doodles, stickers, and correct typography
    - Add background doodle container:
      ```tsx
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* 4 sparkle/star SVG doodles positioned absolutely */}
        <svg className="absolute top-20 left-10 w-12 h-12 text-tertiary-fixed-dim fill-current rotate-12">
          <path d="M12,2 L14,10 L22,12 L14,14 L12,22 L10,14 L2,12 L10,10 Z" />
        </svg>
        {/* Add 3 more sparkles with varied positions and rotations */}
      </div>
      ```
    - Update headline typography:
      ```tsx
      <h1 className="font-display text-display md:text-display-mobile leading-tight tracking-tight font-[900] text-on-surface">
      ```
    - Add floating stickers around headline (sparkle SVG, "YOUR ROLE" badge with rotation)
    - Rebuild hero photo container:
      ```tsx
      <div className="relative">
        <div className="relative rounded-[42%_58%_70%_30%/45%_45%_55%_55%] border-[3.5px] border-on-surface shadow-[8px_8px_0px_#111111] overflow-hidden">
          <Image src="/hero-photo.jpg" alt="Hero" width={400} height={400} />
        </div>
        {/* Add 4 floating stickers: speech bubble, lightning, heart, badge */}
        <div className="absolute -top-4 -right-4 bg-secondary-fixed border-[2px] border-on-surface shadow-[3px_3px_0px_#111111] rounded-full p-2 rotate-12">
          <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>favorite</span>
        </div>
        {/* Add 3 more stickers with varied positions */}
      </div>
      ```
    - Update primary button:
      ```tsx
      <button className="bg-primary text-on-primary border-[3px] border-on-surface shadow-[4px_4px_0px_#111111] rounded-full px-8 py-4 font-label-lg text-label-lg hover:shadow-[6px_6px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-[2px_2px_0px_#111111] active:translate-x-1 active:translate-y-1">
      ```
    - _Bug_Condition: isBugCondition(input) where input.missingDoodleElements() OR input.hasSoftShadows() OR input.borderRadiusMismatch() OR input.typographyWeightMismatch() returns true_
    - _Expected_Behavior: Hero matches Stitch with 8+ doodles, organic blob shape, hard shadows, weight-900 headline_
    - _Preservation: Button hover/click states (3.1-3.2), responsive layout (3.7) remain unchanged_
    - _Requirements: 2.22, 2.23, 2.24, 2.25, 2.26, 2.27, 3.1, 3.2, 3.7_

  - [ ] 3.9 Add Wavy Divider 1 (Cream to Yellow transition)
    - Insert after Hero section:
      ```tsx
      <div className="w-full bg-surface overflow-hidden leading-none -mt-1 pointer-events-none select-none">
        <svg className="w-full h-12 md:h-16 text-tertiary-fixed fill-current" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
      ```
    - _Bug_Condition: isBugCondition(input) where input.missingWavyDividers() returns true_
    - _Expected_Behavior: Wavy SVG divider with unique path separates Hero and About sections_
    - _Preservation: SVG rendering (3.16-3.18), pointer-events-none for decorative elements remain unchanged_
    - _Requirements: 2.28, 3.16, 3.17, 3.18_

  - [ ] 3.10 Rebuild About section with 3-column layout (avatar, bio, checklist)
    - Grid layout:
      ```tsx
      <section className="bg-tertiary-fixed py-16 px-5 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Column 1: Cartoon mascot (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <div className="bg-surface-container-lowest border-[3px] border-on-surface shadow-[6px_6px_0px_#111111] rounded-[1.5rem] p-6">
              <div className="w-full aspect-square rounded-[40%_60%_65%_35%/50%_50%_50%_50%] bg-primary-container border-[2px] border-on-surface overflow-hidden">
                {/* Avatar/mascot image */}
              </div>
            </div>
          </div>
          
          {/* Column 2: Bio text (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block bg-secondary-container text-on-secondary-container border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] rounded-full px-4 py-1 font-label-md text-label-md -rotate-2">
              ABOUT ME
            </div>
            <p className="font-body-lg text-body-lg text-on-tertiary-fixed leading-relaxed">
              {/* Bio text */}
            </p>
          </div>
          
          {/* Column 3: Skills checklist (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <div className="bg-surface-container-lowest border-[3px] border-on-surface shadow-[6px_6px_0px_#111111] rounded-[1.5rem] p-6 relative">
              {/* Crown doodle at top-right */}
              <div className="absolute -top-3 -right-3 text-4xl rotate-12">👑</div>
              
              {/* Checklist items */}
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface">UI/UX Design</span>
                </li>
                {/* Add more checklist items */}
              </ul>
              
              {/* Masking tape sticker */}
              <div className="absolute bottom-4 right-4 bg-surface border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] rounded px-3 py-1 rotate-3 opacity-80">
                <span className="font-label-sm text-label-sm text-on-surface">✓ SKILLS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      ```
    - _Bug_Condition: isBugCondition(input) where input.missingStructuralElements() returns true_
    - _Expected_Behavior: About section contains 3 columns with avatar blob, bio text, and checklist card with crown doodle_
    - _Preservation: Responsive grid behavior (3.7), typography rendering (3.10) remain unchanged_
    - _Requirements: 2.29, 2.30, 3.7, 3.10_

  - [ ] 3.11 Add Wavy Divider 2 (Yellow to Cream transition)
    - Insert after About section:
      ```tsx
      <div className="w-full bg-tertiary-fixed overflow-hidden leading-none -mt-1 pointer-events-none select-none">
        <svg className="w-full h-12 md:h-16 text-surface fill-current" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,0 C200,80 400,-20 600,60 C800,140 1000,20 1200,80 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
      ```
    - _Requirements: 2.28, 3.16, 3.17, 3.18_

  - [ ] 3.12 Update Services section with Material Symbols icons
    - Replace all Heroicons with Material Symbols:
      ```tsx
      {/* Service 1: Strategy */}
      <div className="bg-surface-container-lowest border-[3px] border-on-surface shadow-[6px_6px_0px_#111111] rounded-[1.5rem] p-6 hover:-translate-y-1 transition-transform">
        <div className="w-16 h-16 bg-tertiary-fixed border-[2px] border-on-surface rounded-full flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-headline-md text-tertiary-fixed-dim" style={{fontVariationSettings: '"FILL" 1'}}>lightbulb</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Strategy</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">Strategic planning and research</p>
      </div>
      
      {/* Service 2: Design */}
      <span className="material-symbols-outlined text-headline-md text-secondary-container" style={{fontVariationSettings: '"FILL" 1'}}>draw</span>
      
      {/* Service 3: Development */}
      <span className="material-symbols-outlined text-headline-md text-primary-container" style={{fontVariationSettings: '"FILL" 1'}}>laptop_mac</span>
      
      {/* Service 4: Quality */}
      <span className="material-symbols-outlined text-headline-md text-secondary" style={{fontVariationSettings: '"FILL" 1'}}>verified</span>
      ```
    - _Bug_Condition: isBugCondition(input) where input.usesHeroicons() returns true_
    - _Expected_Behavior: All service icons use Material Symbols with FILL=1 variation setting_
    - _Preservation: Card hover effects (3.3), icon color inheritance (3.16) remain unchanged_
    - _Requirements: 2.31, 3.3, 3.16_

  - [ ] 3.13 Add Wavy Divider 3 (Cream to White transition)
    - Insert after Services section:
      ```tsx
      <svg className="w-full h-12 md:h-16 text-surface-container-lowest fill-current" preserveAspectRatio="none" viewBox="0 0 1200 120">
        <path d="M0,0 C300,90 500,-30 800,60 C950,110 1100,20 1200,60 L1200,120 L0,120 Z"></path>
      </svg>
      ```
    - _Requirements: 2.28, 3.16, 3.17, 3.18_

  - [ ] 3.14 Update Work section with colored thumbnails and rotated sticker tags
    - Project cards structure:
      ```tsx
      {/* Project 1 */}
      <div className="bg-surface-container-lowest border-[3px] border-on-surface shadow-[6px_6px_0px_#111111] rounded-[2rem] overflow-hidden hover:-translate-y-1 transition-transform">
        {/* Colored thumbnail background */}
        <div className="w-full h-48 bg-[#FF9EC4] border-b-[3px] border-on-surface flex items-center justify-center">
          {/* Project thumbnail image or placeholder */}
        </div>
        
        <div className="p-6">
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Project Title</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-4">Project description</p>
          
          {/* Rotated sticker tags */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary-fixed text-on-primary-fixed border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] rounded-full px-3 py-1 font-label-sm text-label-sm -rotate-3">UI Design</span>
            <span className="bg-tertiary-fixed text-on-tertiary-fixed border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] rounded-full px-3 py-1 font-label-sm text-label-sm rotate-2">Branding</span>
          </div>
        </div>
      </div>
      
      {/* Project 2: bg-[#1F3FD1] */}
      {/* Project 3: bg-[#FFD21F] */}
      {/* Project 4: bg-[#E8402F] */}
      ```
    - _Bug_Condition: isBugCondition(input) where input.borderThicknessMismatch() OR input.hasSoftShadows() returns true_
    - _Expected_Behavior: Project cards use 3px borders, hard shadows, and rotated sticker tags_
    - _Preservation: Card hover effects (3.3) remain unchanged_
    - _Requirements: 2.32, 2.33, 3.3_

  - [ ] 3.15 Add Wavy Divider 4 (White to Royal Blue transition)
    - Insert after Work section:
      ```tsx
      <svg className="w-full h-12 md:h-16 text-primary-container fill-current" preserveAspectRatio="none" viewBox="0 0 1200 120">
        <path d="M0,0 C150,100 350,-20 600,70 C850,150 1050,30 1200,60 L1200,120 L0,120 Z"></path>
      </svg>
      ```
    - _Requirements: 2.28, 3.16, 3.17, 3.18_

  - [ ] 3.16 Rebuild Testimonials section with speech bubble cards
    - Testimonial cards structure:
      ```tsx
      <section className="bg-primary-container py-16 px-5 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-primary-container text-center mb-12">Client Love</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="relative">
              <div className="bg-surface-container-lowest border-[3px] border-on-surface shadow-[6px_6px_0px_#111111] rounded-[1.5rem] p-6">
                {/* 5-star rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-tertiary-fixed-dim text-xl" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                  ))}
                </div>
                
                <p className="font-body-md text-body-md text-on-surface mb-4">"Testimonial text here"</p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-fixed border-[2px] border-on-surface rounded-full"></div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Client Name</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Company</p>
                  </div>
                </div>
              </div>
              
              {/* Speech bubble tail */}
              <div className="absolute -bottom-3.5 left-12 w-6 h-6 bg-surface-container-lowest border-r-[3px] border-b-[3px] border-on-surface rotate-45"></div>
            </div>
            
            {/* Testimonial 2 and 3 with same structure */}
          </div>
        </div>
      </section>
      ```
    - _Bug_Condition: isBugCondition(input) where input.missingStructuralElements() returns true_
    - _Expected_Behavior: Testimonials use speech bubble cards with tail, 5-star rating with Material icons_
    - _Preservation: Card hover effects remain unchanged_
    - _Requirements: 2.34, 3.3_

  - [ ] 3.17 Add Wavy Divider 5 (Royal Blue to Cream transition)
    - Insert after Testimonials section:
      ```tsx
      <svg className="w-full h-12 md:h-16 text-surface fill-current" preserveAspectRatio="none" viewBox="0 0 1200 120">
        <path d="M0,0 C250,80 450,-30 700,70 C950,140 1050,10 1200,60 L1200,120 L0,120 Z"></path>
      </svg>
      ```
    - _Requirements: 2.28, 3.16, 3.17, 3.18_

  - [ ] 3.18 Update Process section with Material icon badges
    - Process step cards:
      ```tsx
      <section className="bg-surface py-16 px-5 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-12">My Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Step 1: Research */}
            <div className="bg-surface-container-lowest border-[2.5px] border-on-surface shadow-[4px_4px_0px_#111111] rounded-[1.25rem] p-6 text-center">
              <div className="w-16 h-16 bg-primary-fixed border-[2px] border-on-surface rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-headline-md text-on-primary-fixed-variant" style={{fontVariationSettings: '"FILL" 1'}}>search</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Research</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Deep dive into your needs</p>
            </div>
            
            {/* Step 2: Design - icon: edit */}
            {/* Step 3: Prototype - icon: grid_view */}
            {/* Step 4: Review - icon: rate_review */}
            {/* Step 5: Launch - icon: celebration */}
          </div>
        </div>
      </section>
      ```
    - _Bug_Condition: isBugCondition(input) where input.usesHeroicons() OR input.missingStructuralElements() returns true_
    - _Expected_Behavior: Process section contains 5 horizontal step cards with Material icon badges_
    - _Preservation: Responsive grid behavior (3.7) remains unchanged_
    - _Requirements: 2.35, 3.7_

  - [ ] 3.19 Add Wavy Divider 6 (Cream to Vibrant Red transition)
    - Insert after Process section:
      ```tsx
      <svg className="w-full h-12 md:h-16 text-secondary-container fill-current" preserveAspectRatio="none" viewBox="0 0 1200 120">
        <path d="M0,0 C200,90 400,-10 650,70 C900,140 1100,20 1200,60 L1200,120 L0,120 Z"></path>
      </svg>
      ```
    - _Requirements: 2.28, 3.16, 3.17, 3.18_

  - [ ] 3.20 Rebuild CTA Banner section with background sparkles and badge circle
    - CTA Banner structure:
      ```tsx
      <section className="bg-secondary-container py-20 px-5 md:px-12 relative overflow-hidden">
        {/* Background sparkle emojis */}
        <span className="absolute top-10 left-20 text-4xl opacity-30 pointer-events-none">✨</span>
        <span className="absolute bottom-20 right-32 text-4xl opacity-30 pointer-events-none">⭐</span>
        <span className="absolute top-32 right-20 text-4xl opacity-30 pointer-events-none">💫</span>
        <span className="absolute bottom-10 left-40 text-4xl opacity-30 pointer-events-none">✨</span>
        
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-headline-lg text-headline-lg text-on-secondary-container mb-4">Ready to Start Your Project?</h2>
            <p className="font-body-lg text-body-lg text-on-secondary-container mb-6">Let's create something amazing together</p>
            
            <button className="bg-surface text-on-surface border-[3px] border-on-surface shadow-[4px_4px_0px_#111111] rounded-full px-8 py-4 font-label-lg text-label-lg hover:shadow-[6px_6px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-[2px_2px_0px_#111111] active:translate-x-1 active:translate-y-1">
              Get in Touch
            </button>
          </div>
          
          {/* Large badge circle */}
          <div className="w-64 h-64 rounded-full bg-tertiary-fixed border-[3.5px] border-on-surface shadow-[8px_8px_0px_#111111] flex flex-col items-center justify-center gap-2 -rotate-12">
            <span className="material-symbols-outlined text-6xl text-on-tertiary-fixed" style={{fontVariationSettings: '"FILL" 1'}}>waving_hand</span>
            <span className="font-headline-sm text-headline-sm text-on-tertiary-fixed">LET'S CHAT</span>
          </div>
        </div>
      </section>
      ```
    - _Bug_Condition: isBugCondition(input) where input.missingStructuralElements() OR input.missingDoodleElements() returns true_
    - _Expected_Behavior: CTA banner includes background sparkles and large rotated badge circle with Material icon_
    - _Preservation: Button hover/click states (3.1-3.2) remain unchanged_
    - _Requirements: 2.36, 3.1, 3.2_

  - [ ] 3.21 Rebuild Footer section with 4-column grid and newsletter form
    - Footer structure:
      ```tsx
      <footer className="bg-[#111111] py-16 px-5 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="font-headline-sm text-headline-sm text-inverse-on-surface mb-4">About</h3>
            <p className="font-body-md text-body-md text-inverse-on-surface opacity-80">Creative designer and developer crafting digital experiences</p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-headline-sm text-headline-sm text-inverse-on-surface mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="font-body-md text-body-md text-inverse-on-surface opacity-80 hover:opacity-100">Services</a></li>
              <li><a href="#work" className="font-body-md text-body-md text-inverse-on-surface opacity-80 hover:opacity-100">Work</a></li>
              <li><a href="#about" className="font-body-md text-body-md text-inverse-on-surface opacity-80 hover:opacity-100">About</a></li>
              <li><a href="#contact" className="font-body-md text-body-md text-inverse-on-surface opacity-80 hover:opacity-100">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 3: Let's Connect */}
          <div>
            <h3 className="font-headline-sm text-headline-sm text-inverse-on-surface mb-4">Let's Connect</h3>
            <div className="flex gap-3">
              <a href="#" className="w-12 h-12 bg-surface border-[2px] border-outline-variant shadow-[2px_2px_0px_#ffffff] rounded-full flex items-center justify-center font-label-md text-label-md text-on-surface hover:-translate-y-0.5 transition-transform">
                GH
              </a>
              <a href="#" className="w-12 h-12 bg-surface border-[2px] border-outline-variant shadow-[2px_2px_0px_#ffffff] rounded-full flex items-center justify-center font-label-md text-label-md text-on-surface hover:-translate-y-0.5 transition-transform">
                IN
              </a>
              <a href="#" className="w-12 h-12 bg-surface border-[2px] border-outline-variant shadow-[2px_2px_0px_#ffffff] rounded-full flex items-center justify-center font-label-md text-label-md text-on-surface hover:-translate-y-0.5 transition-transform">
                IG
              </a>
              <a href="#" className="w-12 h-12 bg-surface border-[2px] border-outline-variant shadow-[2px_2px_0px_#ffffff] rounded-full flex items-center justify-center font-label-md text-label-md text-on-surface hover:-translate-y-0.5 transition-transform">
                BE
              </a>
            </div>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-headline-sm text-headline-sm text-inverse-on-surface mb-4">Newsletter</h3>
            <form className="space-y-3">
              <input type="email" placeholder="Your email" className="w-full bg-[#222222] text-inverse-on-surface border-[2px] border-outline-variant shadow-[3px_3px_0px_#ffffff] rounded-full px-4 py-2 font-body-md text-body-md focus:outline-none focus:border-primary" />
              <button type="submit" className="w-full bg-primary text-on-primary border-[2px] border-outline-variant shadow-[3px_3px_0px_#ffffff] rounded-full px-4 py-2 font-label-md text-label-md hover:shadow-[4px_4px_0px_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-outline-variant pt-6 text-center">
          <p className="font-body-sm text-body-sm text-inverse-on-surface opacity-60">© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
      ```
    - _Bug_Condition: isBugCondition(input) where input.missingStructuralElements() OR input.borderThicknessMismatch() returns true_
    - _Expected_Behavior: Footer contains 4-column grid with newsletter form, social badges, and correct input styling_
    - _Preservation: Form behavior, link hover states, responsive grid (3.7) remain unchanged_
    - _Requirements: 2.37, 2.38, 3.7_

  ### 3D: Verification Sub-Tasks

  - [ ] 3.22 Verify bug condition exploration test now passes
    - **Property 1: Expected Behavior** - Design Elements Match Stitch Exactly
    - **IMPORTANT**: Re-run the SAME visual regression test from task 1 - do NOT write a new test
    - The test from task 1 encodes the expected Stitch-matching design
    - When this test passes, it confirms the expected behavior is satisfied
    - Run Playwright visual regression test suite on FIXED code
    - **EXPECTED OUTCOME**: All 9 assertions PASS (confirms all bugs are fixed):
      - ✅ Shadow System: All buttons/cards use hard shadows with format `[Xpx_Ypx_0px_#111111]`
      - ✅ Icon System: All icons use `<span className="material-symbols-outlined">` with fontVariationSettings
      - ✅ Color Tokens: All colors resolve to exact MD3 hex values (primary-container = rgb(31, 63, 209))
      - ✅ Border Radius: Buttons use 9999px, cards use 1.5rem/2rem
      - ✅ Typography Weight: Display headlines use font-weight 900
      - ✅ Structure Completeness: About section contains 3 columns (avatar, bio, checklist)
      - ✅ Wavy Dividers: 6 SVG dividers exist between sections
      - ✅ Doodle Elements: Hero section contains 8+ floating decorations
      - ✅ Border Thickness: Cards use 3px borders
    - Document screenshot comparison results
    - _Requirements: 2.1-2.38 (Expected Behavior Properties from design)_

  - [ ] 3.23 Verify preservation tests still pass
    - **Property 2: Preservation** - Interactive Behavior Unchanged
    - **IMPORTANT**: Re-run the SAME Playwright preservation tests from task 2 - do NOT write new tests
    - Run preservation test suite on FIXED code
    - **EXPECTED OUTCOME**: All preservation tests PASS (confirms no regressions):
      - ✅ Hover State Test: Button/card hover transforms work identically
      - ✅ Click Effect Test: Button click transforms work identically
      - ✅ Navigation Test: Nav link smooth scroll and active highlighting work identically
      - ✅ Layout Responsiveness Test: Breakpoint behavior at 375px, 768px, 1440px identical
      - ✅ Keyboard Navigation Test: Tab order and focus rings work identically
    - Confirm all interactive states, navigation behavior, responsive layout preserved
    - _Requirements: 3.1-3.24 (Preservation Requirements from design)_

---

## Phase 4: Final Validation

- [ ] 4. Checkpoint - Ensure all tests pass
  - Run complete Playwright test suite (exploration + preservation tests)
  - Verify all 9 bug conditions are fixed (Property 1 tests pass)
  - Verify all interactive behaviors preserved (Property 2 tests pass)
  - Run `npm run build` to ensure production build succeeds
  - Test full page render in browser at multiple viewport sizes
  - If any issues found, ask user for clarification before proceeding
  - _Requirements: All (2.1-2.38, 3.1-3.24)_

---

## Notes

- **Test-First Approach**: Tasks 1-2 write tests BEFORE implementing any fixes to establish baselines and confirm bugs exist
- **Bug Condition Methodology**: Exploration test validates fix works for buggy inputs (C), preservation tests validate non-buggy inputs unchanged (¬C)
- **Granular Tasks**: Each implementation task focuses on a specific component or section for clear progress tracking
- **Order Dependencies**: Config changes must be completed before page component changes (foundation first)
- **Success Criteria**: Each task has clear validation requirements and expected outcomes
- **Preservation Guarantee**: All interactive behavior explicitly tested and preserved through Property 2 tests
