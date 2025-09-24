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

          {/* Full-Width Callout Section */}
          <section className="mission-callout">
            <div className="mission-callout__background">
              <div className="mission-callout__overlay"></div>
            </div>
            <div className="mission-callout__content">
              <blockquote className="mission-callout__quote">
                &ldquo;Δεσμευόμαστε να καθοδηγούμε επιχειρήσεις προς βιώσιμη ανάπτυξη και μακροπρόθεσμη επιτυχία.&rdquo;
              </blockquote>
            </div>
          </section>

          {/* Three-Column Supporting Statements */}
          <section className="mission-pillars">
            <div className="mission-pillars__container">
              <div className="mission-pillars__grid">
                <div className="mission-pillar">
                  <div className="mission-pillar__image">
                    <img 
                      src="/hero2.png" 
                      alt="Στρατηγικό Όραμα"
                      className="mission-pillar__photo"
                    />
                  </div>
                  <h3 className="mission-pillar__title">Στρατηγικό Όραμα</h3>
                  <p className="mission-pillar__description">
                    Παρέχουμε προοδευτικές στρατηγικές που προβλέπουν τις τάσεις της αγοράς και τοποθετούν τους πελάτες μας για μελλοντική επιτυχία.
                  </p>
                </div>
                <div className="mission-pillar">
                  <div className="mission-pillar__image">
                    <img 
                      src="/hero.png" 
                      alt="Ακεραιότητα"
                      className="mission-pillar__photo"
                    />
                  </div>
                  <h3 className="mission-pillar__title">Ακεραιότητα</h3>
                  <p className="mission-pillar__description">
                    Κάθε σύσταση που κάνουμε βασίζεται σε ηθικές αρχές και διαφανή επικοινωνία.
                  </p>
                </div>
                <div className="mission-pillar">
                  <div className="mission-pillar__image">
                    <img 
                      src="/p1i2t4jnt0npk1cs8119f1f541uu5e_1440.png" 
                      alt="Λύσεις Εστιασμένες στον Πελάτη"
                      className="mission-pillar__photo"
                    />
                  </div>
                  <h3 className="mission-pillar__title">Λύσεις Εστιασμένες στον Πελάτη</h3>
                  <p className="mission-pillar__description">
                    Προσαρμόζουμε την προσέγγισή μας για να ανταποκρινόμαστε στις συγκεκριμένες ανάγκες και στόχους κάθε μοναδικού πελάτη.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final Closing Section */}
          <section className="mission-closing">
            <div className="mission-closing__background">
              <div className="mission-closing__overlay"></div>
            </div>
            <div className="mission-closing__content">
              <p className="mission-closing__statement">
                Μαζί, χτίζουμε τα θεμέλια για διαρκή επιτυχία και δημιουργούμε αξία που εκτείνεται πολύ πέρα από την συνεργασία μας.
              </p>
            </div>
          </section>
        </main>
      </div>
    </AppLayout>
  );
}
