import { AppLayout } from '@/components/Layout/AppLayout';
import { Header } from '@/components/Navigation/Header';
import '@/styles/navigation.css';
import '@/styles/language.css';
import '@/styles/company-overview.css';
import { CountUpAnimation } from '@/components/Metrics/CountUpAnimation';

export default function CompanyOverview() {
  return (
    <AppLayout>
      <div className="min-h-screen">
        <Header />
        <main className="company-overview">
          {/* Hero Section */}
          <section className="company-overview__hero">
            <video 
              className="company-overview__hero-video"
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="/hero-overview.mp4" type="video/mp4" />
            </video>
            <div className="company-overview__hero-overlay"></div>
            <div className="company-overview__container">
              <h2 className="company-overview__hero-subtitle">
                Σχετικά με την OPUS Management Consultants
              </h2>
              <div className="company-overview__hero-content">
                <h1 className="company-overview__hero-title">
                  Ενδυναμώνουμε οργανισμούς με εμπειρία, καινοτομία και ακεραιότητα.
                </h1>
              </div>
            </div>
          </section>

          {/* Gradient Section */}
          <section className="company-overview__logo-section">
            <div className="company-overview__container">
              <div className="company-overview__logo-content">
                <p className="company-overview__logo-text company-overview__logo-text--first">
                  Οι πελάτες μας κοιτούν μπροστά με φιλοδοξία. Αναζητούν πρόοδο, προκαλούν τις συμβάσεις και οδηγούν τη μεταμόρφωση.
                </p>
                <p className="company-overview__logo-text company-overview__logo-text--second">
                  Στέκουμε δίπλα τους σε κάθε βήμα, διαμορφώνοντας στρατηγικές που παράγουν αντίκτυπο στον δημόσιο τομέα και πέρα από αυτόν. Φέρνουμε σαφήνεια σε πολύπλοκες επενδύσεις, ενδυναμώνουμε οργανισμούς μέσω της τεχνολογίας και σχεδιάζουμε βιώσιμες λύσεις για το μέλλον.
                  Μαζί, μετατρέπουμε το όραμα σε δράση—χτίζοντας ανθεκτικότητα, δημιουργώντας ευκαιρίες και προωθώντας ανάπτυξη που διαρκεί.
                </p>
              </div>
            </div>
          </section>

          {/* Image Section */}
          <section className="company-overview__image-section">
            <div className="company-overview__image-content">
              <div className="company-overview__image-text">
                <h2 className="company-overview__image-title">Ποιοι είμαστε</h2>
                <p className="company-overview__image-description">
                  Από το 1993, η Opus Consulting υποστηρίζει επιχειρήσεις και τον δημόσιο τομέα στην Ελλάδα και το εξωτερικό, προσφέροντας στρατηγική συμβουλευτική, διαχείριση έργων και λύσεις χρηματοδότησης με εστίαση στην εμπιστοσύνη και τις μακροπρόθεσμες συνεργασίες.
                </p>
              </div>
            </div>
            <div className="company-overview__image-container">
              <img 
                src="/opusb.jpg" 
                alt="OPUS Management Consultants" 
                className="company-overview__image"
              />
            </div>
          </section>

          {/* Metrics Section */}
          <section className="company-overview__metrics">
            <div className="company-overview__container">
              <h2 className="company-overview__section-title company-overview__section-title--centered">
                Τα Αποτελέσματά μας
              </h2>
              <div className="company-overview__metrics-simple">
                <div className="company-overview__metric-item">
                  <CountUpAnimation 
                    target={482} 
                    className="company-overview__metric-number"
                  />
                  <span className="company-overview__metric-label">Ολοκληρωμένα Έργα</span>
                </div>
                <div className="company-overview__metric-item">
                  <CountUpAnimation 
                    target={700} 
                    className="company-overview__metric-number"
                  />
                  <span className="company-overview__metric-label">Ευχαριστημένοι Συνεργάτες</span>
                </div>
                <div className="company-overview__metric-item">
                  <CountUpAnimation 
                    target={315} 
                    className="company-overview__metric-number"
                  />
                  <span className="company-overview__metric-label">Ευημερούσες Συνεργασίες</span>
                </div>
              </div>
            </div>
          </section>

          {/* Vision & Mission Section */}
          <section className="company-overview__vision-mission">
            <div className="company-overview__container">
              <div className="company-overview__vision-content">
                <div className="company-overview__vision-text">
                  <h2 className="company-overview__section-title">
                    Το Ίδρυμά μας
                  </h2>
                  <div className="company-overview__vision-grid">
                    <div className="company-overview__vision-item">
                      <h3 className="company-overview__vision-title">Όραμα</h3>
                      <p className="company-overview__vision-description">
                        Να είμαστε ο παγκόσμιος ηγέτης στην στρατηγική συμβουλευτική, ενδυναμώνοντας οργανισμούς 
                        να επιτύχουν βιώσιμη ανάπτυξη και ανταγωνιστικό πλεονέκτημα μέσω καινοτόμων 
                        λύσεων και μετασχηματιστικής εμπειρίας.
                      </p>
                    </div>
                    <div className="company-overview__vision-item">
                      <h3 className="company-overview__vision-title">Αποστολή</h3>
                      <p className="company-overview__vision-description">
                        Να παρέχουμε εξαιρετικές υπηρεσίες συμβουλευτικής που οδηγούν σε μετρήσιμα αποτελέσματα, 
                        τρέφουν την καινοτομία και δημιουργούν διαρκή αξία για τους πελάτες μας σε διάφορους 
                        κλάδους και τομείς.
                      </p>
                    </div>
                    <div className="company-overview__vision-item">
                      <h3 className="company-overview__vision-title">Αξίες</h3>
                      <p className="company-overview__vision-description">
                        Η ακεραιότητα, η αριστεία, η καινοτομία και η συνεργασία καθοδηγούν όλα όσα κάνουμε. 
                        Είμαστε δεσμευμένοι σε ηθικές πρακτικές, συνεχή μάθηση και δημιουργία 
                        ισχυρών συνεργασιών με τους πελάτες και τις κοινότητές μας.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* CTA Section */}
          <section className="company-overview__cta">
            <div className="company-overview__container">
              <div className="company-overview__cta-content">
                <h2 className="company-overview__cta-title">
                  Έτοιμοι να Μετασχηματίσουμε τον Οργανισμό σας;
                </h2>
                <p className="company-overview__cta-description">
                  Ας συζητήσουμε πώς η στρατηγική μας εμπειρία μπορεί να σας βοηθήσει να επιτύχετε τους πιο 
                  φιλόδοξους στόχους σας και να δημιουργήσετε διαρκή ανταγωνιστικό πλεονέκτημα.
                </p>
                <div className="company-overview__cta-buttons">
                  <button className="company-overview__cta-button company-overview__cta-button--primary">
                    Ξεκινήστε μια Συζήτηση
                  </button>
                  <button className="company-overview__cta-button company-overview__cta-button--secondary">
                    Δείτε το Έργο μας
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </AppLayout>
  );
}
