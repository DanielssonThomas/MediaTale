export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: number
          monthly_visit_count: number | null
          name: string | null
        }
        Insert: {
          id?: number
          monthly_visit_count?: number | null
          name?: string | null
        }
        Update: {
          id?: number
          monthly_visit_count?: number | null
          name?: string | null
        }
        Relationships: []
      }
      categories_posts: {
        Row: {
          category_id: number | null
          id: number
          post_id: number | null
        }
        Insert: {
          category_id?: number | null
          id?: number
          post_id?: number | null
        }
        Update: {
          category_id?: number | null
          id?: number
          post_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "categories_posts_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categories_posts_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          }
        ]
      }
      comment_event: {
        Row: {
          comment_id: number | null
          dislike: boolean | null
          id: number
          like: boolean | null
          profile_id: number | null
        }
        Insert: {
          comment_id?: number | null
          dislike?: boolean | null
          id?: number
          like?: boolean | null
          profile_id?: number | null
        }
        Update: {
          comment_id?: number | null
          dislike?: boolean | null
          id?: number
          like?: boolean | null
          profile_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "comment_event_comment_id_fkey"
            columns: ["comment_id"]
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comment_event_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      comments: {
        Row: {
          comment: string | null
          created_at: string
          dislike_count: number | null
          id: number
          like_count: number | null
          post_id: number | null
          profile_id: number | null
          sub_comment_id: number | null
          user_id: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          dislike_count?: number | null
          id?: number
          like_count?: number | null
          post_id?: number | null
          profile_id?: number | null
          sub_comment_id?: number | null
          user_id?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          dislike_count?: number | null
          id?: number
          like_count?: number | null
          post_id?: number | null
          profile_id?: number | null
          sub_comment_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      post_event: {
        Row: {
          dislike: boolean | null
          id: number
          like: boolean | null
          post_id: number | null
          profile_id: number | null
        }
        Insert: {
          dislike?: boolean | null
          id?: number
          like?: boolean | null
          post_id?: number | null
          profile_id?: number | null
        }
        Update: {
          dislike?: boolean | null
          id?: number
          like?: boolean | null
          post_id?: number | null
          profile_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "post_event_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_event_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      posts: {
        Row: {
          created_at: string
          created_by_username: string | null
          created_by_uuid: string | null
          description: string | null
          id: number
          image: string | null
          text_content: string | null
          title: string | null
          video: string | null
        }
        Insert: {
          created_at?: string
          created_by_username?: string | null
          created_by_uuid?: string | null
          description?: string | null
          id?: number
          image?: string | null
          text_content?: string | null
          title?: string | null
          video?: string | null
        }
        Update: {
          created_at?: string
          created_by_username?: string | null
          created_by_uuid?: string | null
          description?: string | null
          id?: number
          image?: string | null
          text_content?: string | null
          title?: string | null
          video?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_created_by_username_fkey"
            columns: ["created_by_username"]
            referencedRelation: "profiles"
            referencedColumns: ["username"]
          },
          {
            foreignKeyName: "posts_created_by_uuid_fkey"
            columns: ["created_by_uuid"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_image_fkey"
            columns: ["image"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_video_fkey"
            columns: ["video"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
      posts_statistics: {
        Row: {
          created_at: string
          created_by: string | null
          dislike_count: number | null
          id: number
          like_count: number | null
          post_id: number | null
          updated_at: string | null
          view_count: number | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          dislike_count?: number | null
          id?: number
          like_count?: number | null
          post_id?: number | null
          updated_at?: string | null
          view_count?: number | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          dislike_count?: number | null
          id?: number
          like_count?: number | null
          post_id?: number | null
          updated_at?: string | null
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_statistics_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_statistics_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          about: string | null
          contact_email: string | null
          country: string | null
          created_at: string
          email: string | null
          first_name: string | null
          followers: number | null
          following: number | null
          id: number
          last_name: string | null
          user_id: string | null
          username: string | null
        }
        Insert: {
          about?: string | null
          contact_email?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          followers?: number | null
          following?: number | null
          id?: number
          last_name?: string | null
          user_id?: string | null
          username?: string | null
        }
        Update: {
          about?: string | null
          contact_email?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          followers?: number | null
          following?: number | null
          id?: number
          last_name?: string | null
          user_id?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment: {
        Args: {
          id: number
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
