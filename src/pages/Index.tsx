import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [name, setName] = useState('');
  const [track, setTrack] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error('Укажи своё имя!');
      return;
    }
    if (!track.trim()) {
      toast.error('Не забудь трек для караоке! 🎤');
      return;
    }
    setSubmitted(true);
    toast.success('Отлично! Жду твоего выступления! 🎉');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 animate-wave"
            style={{
              top: `${10 + i * 4}%`,
              width: '200%',
              animationDelay: `${i * 0.3}s`,
              left: '-100%'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          <div className="text-center space-y-4 md:space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground">
              Мне 30...
            </h2>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="inline-block text-primary animate-neon-pulse">
                ...но я всё ещё верю,
              </span>
              <br />
              <span className="inline-block text-secondary animate-neon-pulse" style={{ animationDelay: '0.5s' }}>
                что взрослая жизнь
              </span>
              <br />
              <span className="inline-block text-accent animate-neon-pulse" style={{ animationDelay: '1s' }}>
                начнётся позже
              </span>
            </h1>

            <p className="text-2xl md:text-4xl handwriting text-foreground/90 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              А пока - отмечаем!
            </p>
          </div>

          <Card className="p-6 md:p-10 border-2 border-primary/30 shadow-2xl animate-glow animate-slide-up backdrop-blur-sm bg-card/80" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  Приходи петь!
                </h2>
                <p className="text-lg text-muted-foreground">
                  Будет громко, весело и безответственно!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
                  <div className="text-4xl">🎤</div>
                  <div>
                    <p className="font-semibold text-primary">Место</p>
                    <p className="text-sm text-foreground/80">Караоке-клуб "Селфи"</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-colors">
                  <Icon name="MapPin" className="text-secondary flex-shrink-0" size={32} />
                  <div>
                    <p className="font-semibold text-secondary">Адрес</p>
                    <p className="text-sm text-foreground/80">ул. Рокоссовского, 15</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors">
                  <Icon name="Calendar" className="text-accent flex-shrink-0" size={32} />
                  <div>
                    <p className="font-semibold text-accent">Дата</p>
                    <p className="text-sm text-foreground/80">6 декабря</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
                  <Icon name="Clock" className="text-primary flex-shrink-0" size={32} />
                  <div>
                    <p className="font-semibold text-primary">Время</p>
                    <p className="text-sm text-foreground/80">19:00</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-lg border border-primary/30 mt-6">
                <p className="text-center text-lg text-foreground/90 leading-relaxed">
                  Приходи петь, танцевать и откладывать взросление вместе со мной!
                </p>
              </div>
            </div>
          </Card>

          {!submitted ? (
            <Card className="p-6 md:p-10 border-2 border-secondary/30 shadow-2xl animate-slide-up backdrop-blur-sm bg-card/80" style={{ animationDelay: '0.6s' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                    Я приду петь!
                  </h2>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-semibold text-foreground/90">
                    Твоё имя
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Как тебя зовут?"
                    className="text-lg p-6 border-2 border-primary/30 focus:border-primary bg-muted/30 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="track" className="text-lg font-semibold text-foreground/90 flex items-center gap-2">
                    <span>Твой трек для караоке</span>
                    <span className="text-primary">(обязательно!)</span>
                  </Label>
                  <Textarea
                    id="track"
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                    placeholder="Какую песню будешь петь?"
                    className="text-lg p-6 border-2 border-secondary/30 focus:border-secondary bg-muted/30 min-h-24 transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-xl py-7 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold animate-glow"
                >
                  <Icon name="Mic2" className="mr-2" size={24} />
                  Я буду петь! 🎤
                </Button>
              </form>
            </Card>
          ) : (
            <Card className="p-8 md:p-12 border-2 border-accent/50 shadow-2xl animate-slide-up backdrop-blur-sm bg-card/80 text-center">
              <div className="text-6xl mb-4 animate-float">🎉</div>
              <h3 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                Отлично, {name}!
              </h3>
              <p className="text-xl text-foreground/80 mb-2">
                Жду твоего выступления с треком:
              </p>
              <p className="text-2xl handwriting text-primary">
                "{track}"
              </p>
            </Card>
          )}

          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <Card className="p-6 bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/40 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🍹</div>
                <div>
                  <p className="text-xl font-bold text-primary">Первые 30 минут - бар за мой счет!</p>
                  <p className="text-sm text-foreground/70">Успей сделать заказ 😉</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-secondary/20 to-accent/20 border-2 border-secondary/40 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="text-4xl">✨</div>
                <div>
                  <p className="text-xl font-bold text-secondary">Дресс-код: хорошее настроение</p>
                  <p className="text-sm text-foreground/70">И готовность петь всю ночь!</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center space-y-4 py-8 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="flex justify-center gap-4 text-4xl md:text-5xl">
              <span className="animate-float">🎤</span>
              <span className="animate-float" style={{ animationDelay: '0.2s' }}>🎸</span>
              <span className="animate-float" style={{ animationDelay: '0.4s' }}>🎹</span>
              <span className="animate-float" style={{ animationDelay: '0.6s' }}>🎵</span>
              <span className="animate-float" style={{ animationDelay: '0.8s' }}>🎶</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              До встречи на сцене!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
