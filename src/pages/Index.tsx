import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('1');
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error('Пожалуйста, укажи своё имя');
      return;
    }
    toast.success(`Спасибо, ${name}! Жду тебя на празднике! 🎉`);
    setName('');
    setGuests('1');
  };

  const confettiColors = ['#D946EF', '#8B5CF6', '#F59E0B', '#EC4899', '#3B82F6'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 relative overflow-hidden">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                width: '10px',
                height: '10px',
                backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
                borderRadius: Math.random() > 0.5 ? '50%' : '0',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-6 animate-bounce-in">
              <span className="text-7xl">🎂</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 mb-6">
              Мне 30!
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 italic font-medium max-w-2xl mx-auto leading-relaxed">
              "Мне 30, но я всё ещё верю, что взрослая жизнь начнётся позже."
            </p>
          </div>

          <Card className="p-8 md:p-12 shadow-2xl border-4 border-purple-200 bg-white/90 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-purple-700">
                <span className="text-5xl animate-float">🎉</span>
                <h2 className="text-3xl md:text-4xl font-bold">Приглашение</h2>
              </div>

              <div className="space-y-6 text-lg">
                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                  <Icon name="Calendar" className="text-purple-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <p className="font-semibold text-purple-900">Когда</p>
                    <p className="text-gray-700">6 декабря 2024</p>
                    <p className="text-gray-700">Начало в 19:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl">
                  <Icon name="MapPin" className="text-pink-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <p className="font-semibold text-pink-900">Где</p>
                    <p className="text-gray-700">Караоке клуб "Селфи"</p>
                    <p className="text-gray-700">ул. Рокоссовского, 15</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-xl">
                  <Icon name="Music" className="text-yellow-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <p className="font-semibold text-yellow-900">Программа</p>
                    <p className="text-gray-700">Караоке, танцы, веселье до утра!</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 md:p-12 shadow-2xl border-4 border-pink-200 bg-white/90 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4 mb-8 text-pink-700">
              <span className="text-5xl animate-float" style={{ animationDelay: '0.5s' }}>🎈</span>
              <h2 className="text-3xl md:text-4xl font-bold">Подтверди присутствие</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-semibold text-gray-700">
                  Твоё имя
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Как тебя зовут?"
                  className="text-lg p-6 border-2 border-purple-200 focus:border-purple-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests" className="text-lg font-semibold text-gray-700">
                  Сколько человек придёт?
                </Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="5"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="text-lg p-6 border-2 border-purple-200 focus:border-purple-500 transition-colors"
                />
              </div>

              <Button
                type="submit"
                className="w-full text-xl py-7 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Icon name="PartyPopper" className="mr-2" size={24} />
                Я буду! 🎊
              </Button>
            </form>
          </Card>

          <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex justify-center gap-4 text-5xl">
              <span className="animate-float">🎈</span>
              <span className="animate-float" style={{ animationDelay: '0.2s' }}>🎉</span>
              <span className="animate-float" style={{ animationDelay: '0.4s' }}>🎊</span>
              <span className="animate-float" style={{ animationDelay: '0.6s' }}>🎁</span>
              <span className="animate-float" style={{ animationDelay: '0.8s' }}>🎂</span>
            </div>
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              До встречи на празднике!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
