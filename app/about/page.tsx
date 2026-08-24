import Link from 'next/link';
import { Shield, CheckCircle, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#F0FDF4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}>
              <Shield className="w-4 h-4" />
              Trusted Verification — Fast &amp; Secure
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1F2937' }}>
              Built for Trust,<br />Powered by Security
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              Vena is a secure identity verification platform designed to make the verification process simple, fast, and reliable. We built this for people who need confidence and clarity — not confusion.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Why We Built This</h2>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              Verification should be simple. We built Vena because people deserve a platform where confirming their identity is fast, secure, and stress-free — no complicated steps, no long waits.
            </p>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              Every step of our process is designed with your privacy and security in mind. We use industry-standard practices to keep your information safe and your experience smooth.
            </p>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              Join thousands of people who trust Vena for fast, reliable verification. Get started today.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DCFCE7' }}>
                  <Shield className="w-5 h-5" style={{ color: '#16A34A' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Secure & Private</h3>
                  <p style={{ color: '#6B7280' }}>Your information is protected with industry-standard security. We never share your data without your consent.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DCFCE7' }}>
                  <CheckCircle className="w-5 h-5" style={{ color: '#16A34A' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Trusted Verification</h3>
                  <p style={{ color: '#6B7280' }}>Our verification process is straightforward and reliable — get confirmed quickly with confidence.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DCFCE7' }}>
                  <Zap className="w-5 h-5" style={{ color: '#16A34A' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Fast & Easy</h3>
                  <p style={{ color: '#6B7280' }}>Complete your verification in minutes. No complicated setup, no long waits — just fast, straightforward access.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
