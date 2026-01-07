import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section className="flex items-center justify-center py-16 bg-accent text-foreground">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Ready to experience the concert of a lifetime?</h2>
        <p className="mt-4 text-lg">Get your tickets now and join us for an unforgettable night with Taylor Swift!</p>
        <Button className="mt-8 bg-primary hover:bg-secondary text-white" onClick={() => alert('Tickets are coming soon!')}>Get Tickets</Button>
      </div>
    </section>
  );
}
