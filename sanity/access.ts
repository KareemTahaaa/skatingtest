import { defineCliConfig } from 'sanity/cli'
import type { Rule } from '@sanity/types'

// Define roles
type UserRole = 'administrator' | 'editor' | 'author'

// Helper function to check if user has a specific role
const hasRole = (role: UserRole) => {
  return ({ currentUser }: { currentUser: any }) => {
    return currentUser.roles.some((userRole: any) => userRole.name === role)
  }
}

// Helper function to check if user is logged in
const isAuthenticated = ({ currentUser }: { currentUser: any }) => {
  return currentUser !== null
}

export const accessRules = {
  // Default rule - deny all access unless explicitly granted
  default: false,

  // Schema-specific rules
  schema: {
    // News-related schemas
    news: {
      // Administrators can do everything
      create: hasRole('administrator'),
      read: isAuthenticated,
      update: ({ currentUser, document }: { currentUser: any; document: any }) => {
        // Administrators can edit all news
        if (currentUser.roles.some(role => role.name === 'administrator')) return true
        // Editors can edit all news
        if (currentUser.roles.some(role => role.name === 'editor')) return true
        // Authors can only edit their own news
        if (currentUser.roles.some(role => role.name === 'author')) {
          return document.author._ref === currentUser.id
        }
        return false
      },
      delete: hasRole('administrator'),
    },

    // Page schemas - only administrators and editors can modify
    newsPage: {
      create: hasRole('administrator'),
      read: isAuthenticated,
      update: ({ currentUser }: { currentUser: any }) => {
        return currentUser.roles.some(role => 
          ['administrator', 'editor'].includes(role.name)
        )
      },
      delete: hasRole('administrator'),
    },
    eventsPage: {
      create: hasRole('administrator'),
      read: isAuthenticated,
      update: ({ currentUser }: { currentUser: any }) => {
        return currentUser.roles.some(role => 
          ['administrator', 'editor'].includes(role.name)
        )
      },
      delete: hasRole('administrator'),
    },
    about: {
      create: hasRole('administrator'),
      read: isAuthenticated,
      update: ({ currentUser }: { currentUser: any }) => {
        return currentUser.roles.some(role => 
          ['administrator', 'editor'].includes(role.name)
        )
      },
      delete: hasRole('administrator'),
    },
    contact: {
      create: hasRole('administrator'),
      read: isAuthenticated,
      update: ({ currentUser }: { currentUser: any }) => {
        return currentUser.roles.some(role => 
          ['administrator', 'editor'].includes(role.name)
        )
      },
      delete: hasRole('administrator'),
    },
    regulations: {
      create: hasRole('administrator'),
      read: isAuthenticated,
      update: ({ currentUser }: { currentUser: any }) => {
        return currentUser.roles.some(role => 
          ['administrator', 'editor'].includes(role.name)
        )
      },
      delete: hasRole('administrator'),
    },

    // Sport disciplines - only administrators and editors can modify
    sportDiscipline: {
      create: hasRole('administrator'),
      read: isAuthenticated,
      update: ({ currentUser }: { currentUser: any }) => {
        return currentUser.roles.some(role => 
          ['administrator', 'editor'].includes(role.name)
        )
      },
      delete: hasRole('administrator'),
    },

    // Events - administrators and editors can create/edit
    event: {
      create: ({ currentUser }: { currentUser: any }) => {
        return currentUser.roles.some(role => 
          ['administrator', 'editor'].includes(role.name)
        )
      },
      read: isAuthenticated,
      update: ({ currentUser }: { currentUser: any }) => {
        return currentUser.roles.some(role => 
          ['administrator', 'editor'].includes(role.name)
        )
      },
      delete: hasRole('administrator'),
    },

    // Site settings - only administrators can modify
    siteSettings: {
      create: hasRole('administrator'),
      read: isAuthenticated,
      update: hasRole('administrator'),
      delete: hasRole('administrator'),
    },

    // Categories - only administrators can create/delete, editors can update
    category: {
      create: hasRole('administrator'),
      read: isAuthenticated,
      update: ({ currentUser }: { currentUser: any }) => {
        return currentUser.roles.some(role => 
          ['administrator', 'editor'].includes(role.name)
        )
      },
      delete: hasRole('administrator'),
    },

    // Authors - only administrators can manage
    author: {
      create: hasRole('administrator'),
      read: isAuthenticated,
      update: hasRole('administrator'),
      delete: hasRole('administrator'),
    },

    // Quotes - administrators and editors can manage
    quote: {
      create: ({ currentUser }: { currentUser: any }) => {
        return currentUser.roles.some(role => 
          ['administrator', 'editor'].includes(role.name)
        )
      },
      read: isAuthenticated,
      update: ({ currentUser }: { currentUser: any }) => {
        return currentUser.roles.some(role => 
          ['administrator', 'editor'].includes(role.name)
        )
      },
      delete: hasRole('administrator'),
    },
  },
}
