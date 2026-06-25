# FrndCircle App - Screen Documentation

## Color System (Light Mode Only)
- **Primary**: Electric Purple `#9700cd` (oklch(0.580 0.178 290))
- **Secondary**: Cyan `#006970` (oklch(0.450 0.210 195))
- **Accent**: Electric Purple (buttons, badges, interactive elements)
- **Background**: Ghost Violet `#faf8fe` (oklch(0.982 0.003 310))
- **Foreground/Text**: Deep Indigo `#19101c` (oklch(0.110 0.015 280))
- **Muted**: `#e8e5f0` (oklch(0.890 0.015 280))
- **Muted Foreground**: `#6b6478` (oklch(0.510 0.025 270))
- **Border**: `#e2ddf0` (oklch(0.930 0.008 280))
- **Typography**: Poppins (400, 500, 600, 700 weights)

---

## Core Screens

### 1. Home Feed Screen
**Path**: `/home`

**Key Elements:**
- Header: FrndCircle logo (purple) + notification bell (purple badge)
- Search bar: "Search activities, people, or places" with filter icon
- Tab filter: "All Events" (purple filled), "Trending" (purple icon), "This Weekend", "Nearby", "More" (...)
- Event cards: Large image with rounded corners, "Trending" badge (purple), event title, location, date/time, duration, difficulty, spots left, member avatars + "+N" indicator, "X going" count
- Bottom nav: Home (purple), Discover, Create (+), Chats, Profile
- Card styling: White background, subtle border, rounded corners, drop shadow

### 2. Event Detail Screen
**Path**: `/events/[eventId]`

**Key Elements:**
- Header: Back button, heart icon (bookmark), share button
- Hero image: Full-width event activity photo with rounded corners
- "Trending" badge overlay (purple)
- Event title (large, bold)
- Description text (muted foreground)
- Key details row: Date/Time (calendar icon), Duration (clock icon), Difficulty (bike/activity icon), Spots left (people icon)
- Hosted by section: Avatar (circular), name, verified checkmark, stats ("X activities hosted", star rating)
- "View Profile" button (purple outline)
- People going (X): Circular avatars in row, "+N" indicator
- Tags/Interests: Purple icon + text labels (Cycling, Coffee, Photography, Travel, "+3 more")
- About this experience: Expandable sections (What to expect, Who this is for, Things to bring, House rules)
- Conversation preview: Chat bubbles, locked lock icon with "Join to unlock the full chat" link
- Location: Map preview with pin, address, "Meet at the steps near..." note
- Safety note: Verified members checkmark, safety message
- Similar experiences: 4-card carousel (image, title, date, going count)
- CTA button: "Request to Join" or "Join" (purple, full width)
- Tagline: "Your request will be reviewed by the host..."

### 3. Discovery/Browse Screen
**Path**: `/discover`

**Key Elements:**
- Header: "Discover" title or filter options
- Large category cards: image-based with overlaid text
- Event listings: Similar to home feed but with more filtering options
- Filter sidebar or bottom sheet: By category, distance, date, difficulty, etc.

### 4. Create Event Screen
**Path**: `/create`

**Key Elements:**
- Form fields: Activity title, description, date/time picker, duration, location, difficulty level, capacity
- Image upload: Placeholder or uploaded hero image
- Tags: Multi-select interests (Cycling, Coffee, Photography, Travel, etc.)
- Host details auto-filled
- Terms checkbox: "I agree to FrndCircle's host guidelines..."
- Create button: Purple CTA

### 5. Profile Screen
**Path**: `/profile`

**Key Elements:**
- Header: Profile picture (circular, large), name, location, rating (stars + count)
- Stats: Activities hosted, Activities attended, Friends/Connections
- Verified badge: Purple checkmark icon
- Bio/About section
- Interests/Tags row
- "Edit Profile" button (outline) or settings gear
- Activity history: "Upcoming events" and "Past events" tabs
- Hosted activities list
- Ratings/Reviews section (if applicable)
- Account settings link

### 6. Chats Screen
**Path**: `/chats`

**Key Elements:**
- Header: "Chats" or "Messages"
- Chat list: Avatar, name, last message preview (truncated), timestamp, unread indicator (purple badge)
- Search chat field
- New message CTA button

### 7. Chat Detail Screen
**Path**: `/chats/[chatId]`

**Key Elements:**
- Header: Group name/title, member count, info icon
- Member list (if expandable)
- Message threads: Avatar + name (first message), message bubbles, timestamps
- Sent message bubbles: Purple background
- Received message bubbles: Light gray/muted background
- Input field: "Type a message...", send button (purple icon)
- Call/voice options (if applicable)

### 8. Notifications/Friend Requests Screen
**Path**: `/notifications`

**Key Elements:**
- "New friend request" cards: Avatar, name, "Ananya wants to connect" message
- Accept/Decline buttons (purple for accept)
- Other notification types: Event reminders, activity invitations, system messages
- Notification settings link

### 9. Search Results Screen
**Path**: `/search?q=[query]`

**Key Elements:**
- Search input (active/focused)
- Tabs: Activities, People, Places
- Result cards for each category
- Empty state if no results

---

## Design System Notes

### Button Styles
- **Primary (CTA)**: Solid purple background, white text, rounded corners
- **Secondary (Outline)**: Purple border, purple text, transparent background
- **Tertiary (Text)**: Purple text, no background, no border
- **Disabled**: Muted background, muted text

### Card Styling
- Background: White (`#ffffff` or near-white)
- Border: Subtle light border (`#e2ddf0`)
- Shadow: Light drop shadow for depth
- Rounded corners: `0.5rem` to `1rem` depending on context
- Padding: `16px` to `24px`

### Typography Hierarchy
- **H1**: Poppins Bold 32px (event titles, screen headers)
- **H2**: Poppins Bold 24px (section headers)
- **H3**: Poppins Bold 18px (card titles)
- **Body**: Poppins Regular 16px (descriptions, body text)
- **Small**: Poppins Regular 14px (labels, helper text)
- **Micro**: Poppins Medium 12px (tags, badges)

### Icons
- Purple icons for primary actions (heart, bookmark, add, filter)
- Cyan icons for secondary information (location, time, etc.)
- Consistent stroke weight: 2px
- Size: 20px (small), 24px (medium), 32px (large)

### Spacing
- Gutters: 16px horizontal padding on screens
- Card gaps: 12px between cards
- Section spacing: 24px between major sections
- Element gaps: 8px to 12px for tight grouping

---

## Component States

### Event Card States
- Default (visible)
- Hover (slight scale, shadow increase)
- Saved/Bookmarked (heart filled purple)
- Attended (grayed out or checkmark overlay)

### Button States
- Default
- Hover (darker purple)
- Active/Pressed (even darker)
- Disabled (muted colors)
- Loading (spinner or pulse animation)

### Badge Styles
- Filled: Purple background, white text (Trending, Verified)
- Outline: Purple text, light border (filter pills)
- Icon badge: Purple background, white icon (notification count)

---

## Animation Guidelines
- Smooth transitions: 200-300ms
- Modal/overlay: Fade in from bottom
- Card reveal: Subtle fade + scale
- Icon interactions: 150ms spin or scale
- No animations should exceed 500ms

