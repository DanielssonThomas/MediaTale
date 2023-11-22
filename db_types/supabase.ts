export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: number;
          monthly_visit_count: number | null;
          name: string | null;
        };
        Insert: {
          id?: number;
          monthly_visit_count?: number | null;
          name?: string | null;
        };
        Update: {
          id?: number;
          monthly_visit_count?: number | null;
          name?: string | null;
        };
        Relationships: [];
      };
      categories_posts: {
        Row: {
          category_id: number | null;
          id: number;
          post_id: number | null;
        };
        Insert: {
          category_id?: number | null;
          id?: number;
          post_id?: number | null;
        };
        Update: {
          category_id?: number | null;
          id?: number;
          post_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "categories_posts_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "categories";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "categories_posts_post_id_fkey";
            columns: ["post_id"];
            isOneToOne: false;
            referencedRelation: "posts";
            referencedColumns: ["id"];
          }
        ];
      };
      comment_event: {
        Row: {
          comment_id: number | null;
          dislike_bool: boolean | null;
          id: number;
          like_bool: boolean | null;
          profile_id: number | null;
        };
        Insert: {
          comment_id?: number | null;
          dislike_bool?: boolean | null;
          id?: number;
          like_bool?: boolean | null;
          profile_id?: number | null;
        };
        Update: {
          comment_id?: number | null;
          dislike_bool?: boolean | null;
          id?: number;
          like_bool?: boolean | null;
          profile_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "comment_event_comment_id_fkey";
            columns: ["comment_id"];
            isOneToOne: false;
            referencedRelation: "comments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "comment_event_profile_id_fkey";
            columns: ["profile_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      comments: {
        Row: {
          comment: string | null;
          created_at: string;
          dislike_count: number;
          id: number;
          like_count: number;
          post_id: number | null;
          profile_id: number;
          sub_comment_id: number | null;
          user_id: string | null;
        };
        Insert: {
          comment?: string | null;
          created_at?: string;
          dislike_count?: number;
          id?: number;
          like_count?: number;
          post_id?: number | null;
          profile_id: number;
          sub_comment_id?: number | null;
          user_id?: string | null;
        };
        Update: {
          comment?: string | null;
          created_at?: string;
          dislike_count?: number;
          id?: number;
          like_count?: number;
          post_id?: number | null;
          profile_id?: number;
          sub_comment_id?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "comments_post_id_fkey";
            columns: ["post_id"];
            isOneToOne: false;
            referencedRelation: "posts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "comments_profile_id_fkey";
            columns: ["profile_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "comments_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      post_event: {
        Row: {
          dislike_bool: boolean;
          id: number;
          like_bool: boolean;
          post_id: number | null;
          profile_id: number | null;
        };
        Insert: {
          dislike_bool?: boolean;
          id?: number;
          like_bool?: boolean;
          post_id?: number | null;
          profile_id?: number | null;
        };
        Update: {
          dislike_bool?: boolean;
          id?: number;
          like_bool?: boolean;
          post_id?: number | null;
          profile_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "post_event_post_id_fkey";
            columns: ["post_id"];
            isOneToOne: false;
            referencedRelation: "posts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "post_event_profile_id_fkey";
            columns: ["profile_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      posts: {
        Row: {
          created_at: string;
          created_by_username: string | null;
          created_by_uuid: string | null;
          description: string | null;
          id: number;
          image_url: string | null;
          text_content: string | null;
          title: string | null;
        };
        Insert: {
          created_at?: string;
          created_by_username?: string | null;
          created_by_uuid?: string | null;
          description?: string | null;
          id?: number;
          image_url?: string | null;
          text_content?: string | null;
          title?: string | null;
        };
        Update: {
          created_at?: string;
          created_by_username?: string | null;
          created_by_uuid?: string | null;
          description?: string | null;
          id?: number;
          image_url?: string | null;
          text_content?: string | null;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "posts_created_by_username_fkey";
            columns: ["created_by_username"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["username"];
          },
          {
            foreignKeyName: "posts_created_by_uuid_fkey";
            columns: ["created_by_uuid"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      posts_statistics: {
        Row: {
          created_at: string;
          created_by: string | null;
          dislike_count: number | null;
          id: number;
          like_count: number | null;
          post_id: number | null;
          profile_id: number;
          updated_at: string | null;
          view_count: number;
        };
        Insert: {
          created_at?: string;
          created_by?: string | null;
          dislike_count?: number | null;
          id?: number;
          like_count?: number | null;
          post_id?: number | null;
          profile_id: number;
          updated_at?: string | null;
          view_count?: number;
        };
        Update: {
          created_at?: string;
          created_by?: string | null;
          dislike_count?: number | null;
          id?: number;
          like_count?: number | null;
          post_id?: number | null;
          profile_id?: number;
          updated_at?: string | null;
          view_count?: number;
        };
        Relationships: [
          {
            foreignKeyName: "posts_statistics_created_by_fkey";
            columns: ["created_by"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "posts_statistics_post_id_fkey";
            columns: ["post_id"];
            isOneToOne: false;
            referencedRelation: "posts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "posts_statistics_profile_id_fkey";
            columns: ["profile_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      profile_follower: {
        Row: {
          follower_profile_id: number;
          id: number;
          user_profile_id: number;
          user_id: string;
        };
        Insert: {
          follower_profile_id: number;
          id?: number;
          user_profile_id: number;
          user_id: string;
        };
        Update: {
          follower_profile_id?: number;
          id?: number;
          user_profile_id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "profile_follower_follower_profile_id_fkey";
            columns: ["follower_profile_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "profile_follower_user_profile_id_fkey";
            columns: ["user_profile_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "profile_follower_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      profiles: {
        Row: {
          about: string | null;
          avatar_url: string | null;
          contact_email: string | null;
          country: string | null;
          created_at: string;
          email: string | null;
          first_name: string | null;
          followers: number | null;
          following: number | null;
          id: number;
          last_name: string | null;
          user_id: string | null;
          username: string | null;
        };
        Insert: {
          about?: string | null;
          avatar_url?: string | null;
          contact_email?: string | null;
          country?: string | null;
          created_at?: string;
          email?: string | null;
          first_name?: string | null;
          followers?: number | null;
          following?: number | null;
          id?: number;
          last_name?: string | null;
          user_id?: string | null;
          username?: string | null;
        };
        Update: {
          about?: string | null;
          avatar_url?: string | null;
          contact_email?: string | null;
          country?: string | null;
          created_at?: string;
          email?: string | null;
          first_name?: string | null;
          followers?: number | null;
          following?: number | null;
          id?: number;
          last_name?: string | null;
          user_id?: string | null;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      increment_post_view: {
        Args: {
          targetid: number;
        };
        Returns: undefined;
      };
      like_post: {
        Args: {
          target_id: number;
          user_profile_id: number;
        };
        Returns: undefined;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
