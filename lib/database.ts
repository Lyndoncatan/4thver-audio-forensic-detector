import { supabase, isSupabaseAvailable, type AudioAnalysisRecord, type AnalysisSession } from "./supabase"

export class DatabaseService {
  // Check if database is available
  private static checkAvailability(): boolean {
<<<<<<< HEAD
    return isSupabaseAvailable()
  }

  // Test database connection and table existence
  static async testConnection(): Promise<{ success: boolean; message: string }> {
    if (!this.checkAvailability()) {
      return {
        success: false,
        message: "Supabase client not available - check environment variables",
      }
    }

    try {
      // Test connection by trying to fetch from the audio_analyses table
      const { data, error } = await supabase!.from("audio_analyses").select("id").limit(1)

      if (error) {
        if (error.message.includes('relation "public.audio_analyses" does not exist')) {
          return {
            success: false,
            message: "Database tables not found. Please run the SQL setup script in Supabase.",
          }
        }
        return {
          success: false,
          message: `Database connection failed: ${error.message}`,
        }
      }

      return {
        success: true,
        message: "Database connection successful - tables exist",
      }
    } catch (error: any) {
      return {
        success: false,
        message: `Connection test failed: ${error.message || "Unknown error"}`,
      }
    }
  }

  // Create tables programmatically (alternative to SQL script)
  static async createTables(): Promise<{ success: boolean; message: string }> {
    if (!this.checkAvailability()) {
      return {
        success: false,
        message: "Supabase client not available",
      }
    }

    try {
      // Note: This requires database admin privileges
      // It's better to run the SQL script directly in Supabase
      const { error } = await supabase!.rpc("exec", {
        sql: `
          CREATE TABLE IF NOT EXISTS public.audio_analyses (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            filename TEXT NOT NULL,
            duration REAL NOT NULL,
            sample_rate INTEGER NOT NULL,
            average_rms REAL NOT NULL,
            detected_sounds INTEGER NOT NULL,
            dominant_frequency REAL NOT NULL,
            max_decibels REAL NOT NULL,
            sound_events JSONB NOT NULL DEFAULT '[]',
            frequency_spectrum JSONB NOT NULL DEFAULT '[]',
            analysis_results JSONB NOT NULL DEFAULT '{}',
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            user_id UUID DEFAULT NULL
          );
        `,
      })

      if (error) {
        return {
          success: false,
          message: `Failed to create tables: ${error.message}`,
        }
      }

      return {
        success: true,
        message: "Tables created successfully",
      }
    } catch (error: any) {
      return {
        success: false,
        message: `Table creation failed: ${error.message}`,
      }
    }
=======
    if (!isSupabaseAvailable()) {
      console.warn("Database service not available - Supabase not initialized")
      return false
    }
    return true
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
  }

  // Save analysis results to database
  static async saveAnalysis(audioData: any): Promise<string | null> {
    if (!this.checkAvailability()) {
<<<<<<< HEAD
      console.log("Supabase not available - running in local mode")
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("✅ Analysis would be saved to database (demo mode)")
          resolve("demo-id-" + Date.now())
        }, 1000)
      })
=======
      throw new Error("Database service not available. Please check your Supabase configuration.")
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
    }

    try {
      const analysisRecord: AudioAnalysisRecord = {
        filename: audioData.name,
<<<<<<< HEAD
        duration: audioData.analysisResults.duration,
        sample_rate: audioData.analysisResults.sampleRate,
        average_rms: audioData.analysisResults.averageRMS,
        detected_sounds: audioData.analysisResults.detectedSounds,
        dominant_frequency: audioData.analysisResults.dominantFrequency,
        max_decibels: audioData.analysisResults.maxDecibels,
        sound_events: audioData.analysisResults.soundEvents || [],
        frequency_spectrum: audioData.analysisResults.frequencySpectrum || [],
        analysis_results: audioData.analysisResults,
      }

      const { data, error } = await supabase!.from("audio_analyses").insert([analysisRecord]).select()

      if (error) {
        console.error("Supabase insert error:", error)
        if (error.message.includes('relation "public.audio_analyses" does not exist')) {
          throw new Error("Database tables not found. Please run the SQL setup script.")
        }
        return null
      }

      console.log("✅ Analysis saved to Supabase:", data[0].id)
      return data[0].id
    } catch (error: any) {
=======
        duration: audioData.duration,
        sample_rate: audioData.analysisResults?.sampleRate || 44100,
        average_rms: audioData.analysisResults?.averageRMS || 0,
        detected_sounds: audioData.analysisResults?.detectedSounds || 0,
        dominant_frequency: audioData.analysisResults?.dominantFrequency || 0,
        max_decibels: audioData.analysisResults?.maxDecibels || 0,
        sound_events: audioData.analysisResults?.soundEvents || [],
        frequency_spectrum: audioData.analysisResults?.frequencySpectrum || [],
        analysis_results: audioData.analysisResults || {},
      }

      console.log("Attempting to save analysis to database...")

      const { data, error } = await supabase.from("audio_analyses").insert([analysisRecord]).select().single()

      if (error) {
        console.error("Supabase error saving analysis:", error)
        throw new Error(`Database error: ${error.message}`)
      }

      console.log("✅ Analysis saved successfully:", data.id)
      return data.id
    } catch (error) {
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
      console.error("Database save error:", error)
      throw error
    }
  }

  // Get all analyses
  static async getAllAnalyses(): Promise<AudioAnalysisRecord[]> {
    if (!this.checkAvailability()) {
<<<<<<< HEAD
      console.log("Supabase not available - returning empty array")
=======
      console.warn("Database not available, returning empty array")
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
      return []
    }

    try {
<<<<<<< HEAD
      const { data, error } = await supabase!
=======
      const { data, error } = await supabase
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
        .from("audio_analyses")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) {
<<<<<<< HEAD
        console.error("Supabase fetch error:", error)
=======
        console.error("Error fetching analyses:", error)
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
        return []
      }

      return data || []
    } catch (error) {
      console.error("Database fetch error:", error)
      return []
    }
  }

  // Delete analysis
  static async deleteAnalysis(id: string): Promise<boolean> {
    if (!this.checkAvailability()) {
<<<<<<< HEAD
      console.log("Supabase not available - simulating delete")
      return true
    }

    try {
      const { error } = await supabase!.from("audio_analyses").delete().eq("id", id)

      if (error) {
        console.error("Supabase delete error:", error)
=======
      throw new Error("Database service not available")
    }

    try {
      const { error } = await supabase.from("audio_analyses").delete().eq("id", id)

      if (error) {
        console.error("Error deleting analysis:", error)
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
        return false
      }

      return true
    } catch (error) {
      console.error("Database delete error:", error)
      return false
    }
  }

  // Save analysis session
  static async saveSession(sessionName: string, audioData: any): Promise<string | null> {
    if (!this.checkAvailability()) {
<<<<<<< HEAD
      console.log("Supabase not available - simulating session save")
      return "demo-session-" + Date.now()
    }

    try {
      const sessionRecord: AnalysisSession = {
=======
      throw new Error("Database service not available")
    }

    try {
      const session: AnalysisSession = {
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
        session_name: sessionName,
        audio_file_url: audioData.url,
        analysis_data: {
          filename: audioData.name,
<<<<<<< HEAD
          duration: audioData.analysisResults.duration,
          sample_rate: audioData.analysisResults.sampleRate,
          average_rms: audioData.analysisResults.averageRMS,
          detected_sounds: audioData.analysisResults.detectedSounds,
          dominant_frequency: audioData.analysisResults.dominantFrequency,
          max_decibels: audioData.analysisResults.maxDecibels,
          sound_events: audioData.analysisResults.soundEvents || [],
          frequency_spectrum: audioData.analysisResults.frequencySpectrum || [],
          analysis_results: audioData.analysisResults,
        },
      }

      const { data, error } = await supabase!.from("analysis_sessions").insert([sessionRecord]).select()

      if (error) {
        console.error("Supabase session insert error:", error)
        return null
      }

      return data[0].id
=======
          duration: audioData.duration,
          sample_rate: audioData.analysisResults?.sampleRate || 44100,
          average_rms: audioData.analysisResults?.averageRMS || 0,
          detected_sounds: audioData.analysisResults?.detectedSounds || 0,
          dominant_frequency: audioData.analysisResults?.dominantFrequency || 0,
          max_decibels: audioData.analysisResults?.maxDecibels || 0,
          sound_events: audioData.analysisResults?.soundEvents || [],
          frequency_spectrum: audioData.analysisResults?.frequencySpectrum || [],
          analysis_results: audioData.analysisResults || {},
        },
      }

      const { data, error } = await supabase.from("analysis_sessions").insert([session]).select().single()

      if (error) {
        console.error("Error saving session:", error)
        return null
      }

      return data.id
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
    } catch (error) {
      console.error("Database session save error:", error)
      return null
    }
  }

  // Get all sessions
  static async getAllSessions(): Promise<AnalysisSession[]> {
    if (!this.checkAvailability()) {
<<<<<<< HEAD
      console.log("Supabase not available - returning empty sessions")
=======
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
      return []
    }

    try {
<<<<<<< HEAD
      const { data, error } = await supabase!
=======
      const { data, error } = await supabase
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
        .from("analysis_sessions")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) {
<<<<<<< HEAD
        console.error("Supabase sessions fetch error:", error)
=======
        console.error("Error fetching sessions:", error)
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
        return []
      }

      return data || []
    } catch (error) {
      console.error("Database sessions fetch error:", error)
      return []
    }
  }
<<<<<<< HEAD
=======

  // Test database connection
  static async testConnection(): Promise<{ success: boolean; message: string }> {
    if (!this.checkAvailability()) {
      return {
        success: false,
        message: "Supabase client not initialized",
      }
    }

    try {
      // Try to fetch from a table (this will test the connection)
      const { data, error } = await supabase.from("audio_analyses").select("count").limit(1)

      if (error) {
        return {
          success: false,
          message: `Database connection failed: ${error.message}`,
        }
      }

      return {
        success: true,
        message: "Database connection successful",
      }
    } catch (error) {
      return {
        success: false,
        message: `Connection test failed: ${error}`,
      }
    }
  }
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
}
