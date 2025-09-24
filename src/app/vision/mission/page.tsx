import React from 'react';
import { AppLayout } from '@/components/Layout/AppLayout';
import { Header } from '@/components/Navigation/Header';
import '@/styles/navigation.css';
import '@/styles/language.css';
import '@/styles/mission-statement.css';

export default function VisionMissionPage() {
  return (
    <AppLayout>
      <div className="min-h-screen">
        <Header />
        <main className="mission-page">
          {/* Hero Section */}
          <section className="mission-hero">
            <div className="mission-hero__background">
              <div className="mission-hero__overlay"></div>
            </div>
            <div className="mission-hero__content">
              <h1 className="mission-hero__title">Η Αποστολή Μας</h1>
            </div>
          </section>

          {/* Two-Column Mission Content */}
          <section className="mission-content">
            <div className="mission-content__container">
              <div className="mission-content__text">
                <h2 className="mission-content__heading">Η Δέσμευσή Μας για την Αριστεία</h2>
                <div className="mission-content__paragraphs">
                  <p className="mission-content__paragraph">
                    Στο επίκεντρο της αποστολής μας βρίσκεται μια ακλόνητη δέσμευση για την παροχή εξαιρετικών συμβουλευτικών υπηρεσιών που μεταμορφώνουν επιχειρήσεις και οδηγούν σε ουσιαστικές αλλαγές. Πιστεύουμε ότι κάθε οργανισμός, ανεξάρτητα από το μέγεθος ή τον κλάδο, αξίζει πρόσβαση σε παγκόσμιας κλάσης στρατηγική καθοδήγηση που μπορεί να ξεκλειδώσει το πραγματικό του δυναμικό.
                  </p>
                  <p className="mission-content__paragraph">
                    Η προσέγγισή μας βασίζεται στα θεμέλια της εμπιστοσύνης, της ακεραιότητας και της βαθιάς εμπειρίας. Καταλαβαίνουμε ότι κάθε πελάτης αντιμετωπίζει μοναδικές προκλήσεις και ευκαιρίες, γι' αυτό προσαρμόζουμε τις λύσεις μας για να καλύψουμε συγκεκριμένες ανάγκες διατηρώντας τα υψηλότερα πρότυπα επαγγελματισμού και ηθικής συμπεριφοράς.
                  </p>
                  <p className="mission-content__paragraph">
                    Μέσω του ολοκληρωμένου συμβουλευτικού μας πλαισίου, ενδυναμώνουμε τους ηγέτες να παίρνουν ενημερωμένες αποφάσεις, να βελτιστοποιούν τις λειτουργίες και να επιτυγχάνουν βιώσιμη ανάπτυξη. Αφιερωμένοι να είμαστε περισσότερο από απλοί σύμβουλοι – είμαστε στρατηγικοί εταίροι αφοσιωμένοι στην μακροπρόθεσμη επιτυχία σας.
                  </p>
                </div>
              </div>
              <div className="mission-content__image">
                <img 
                  src="/land2.jpg" 
                  alt="Επαγγελματική ομάδα συμβούλων σε συζήτηση"
                  className="mission-content__photo"
                />
              </div>
            </div>
          </section>

        </main>
      </div>
    </AppLayout>
  );
}
