# Calendar Application

A modern, functional calendar application built with React.js and Tailwind CSS that replicates the design from the provided mockup.

## Features

- **📅 Monthly Calendar View**: Navigate through months with a clean, intuitive interface
- **🔍 Search Functionality**: Search through events by title
- **📋 Event Management**: View events with different colors and categories
- **📱 Responsive Design**: Clean, modern UI that works on different screen sizes
- **🎨 Beautiful Interface**: Styled with Tailwind CSS for a professional look

## Components

### Sidebar
- Navigation menu with Dashboard, Projects, Documents, and Calendar
- Work Teams section with different team categories
- User profile section

### Calendar View
- Monthly calendar grid
- Event filtering (All events, Personal, Public, Archived)
- Search functionality
- Month navigation (Previous/Next/Today)
- Add event button
- View selector (Month/Week/Day)

### Calendar Grid
- 7-day week layout starting with Monday
- Events displayed with different colors by category
- Today indicator
- Support for multiple events per day with "more" indicator

## Event Types & Colors

- **Meetings**: Blue background
- **Standups**: Green background  
- **Planning**: Blue/Indigo background
- **Social/Personal**: Green/Orange background
- **Reviews**: Purple background
- **Company Events**: Red background
- **Learning**: Yellow background
- **Client**: Green background

## Installation & Usage

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx          # Left navigation sidebar
│   ├── CalendarView.jsx     # Main calendar view with header
│   └── CalendarGrid.jsx     # Calendar grid with events
├── App.jsx                  # Main application component
├── index.css               # Tailwind CSS imports
└── App.css                 # Additional styles
```

## Technology Stack

- **React.js**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Build tool and development server
- **JavaScript**: Programming language (no TypeScript as requested)

## Features Demo

### Navigation
- Click the left/right arrows to navigate between months
- Click "Today" to jump to the current date
- Use the search bar to filter events

### Interactive Elements
- Hover over events to see full titles and times
- Click on different navigation items in the sidebar
- Use the view selector to switch between Month/Week/Day views

### Sample Events
The application comes with sample events for January 2025 including:
- Morning standups
- One-on-one meetings
- Planning sessions
- Social events
- Company events
- Client meetings

## Customization

You can easily customize the calendar by:
- Adding new event types in `CalendarView.jsx`
- Modifying colors in the events array
- Updating the sidebar navigation items
- Adding new features like event creation/editing

## Browser Support

This application works in all modern browsers that support ES6+ features.
