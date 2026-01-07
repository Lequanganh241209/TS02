export function Features() {
  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card">
            <h3 className="text-2xl font-bold">Easy Booking</h3>
            <p>Book your tickets effortlessly with our user-friendly platform.</p>
          </div>
          <div className="feature-card">
            <h3 className="text-2xl font-bold">Secure Payments</h3>
            <p>We ensure secure payment gateways for a worry-free purchase.</p>
          </div>
          <div className="feature-card">
            <h3 className="text-2xl font-bold">24/7 Support</h3>
            <p>Our team is here to assist you at any time of the day.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
