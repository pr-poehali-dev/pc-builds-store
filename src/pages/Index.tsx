import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');

  const pcBuilds = [
    {
      id: 1,
      name: 'Игровой Монстр RTX 4090',
      category: 'gaming',
      price: 350000,
      specs: {
        cpu: 'Intel Core i9-14900K',
        gpu: 'RTX 4090 24GB',
        ram: '64GB DDR5',
        storage: '2TB NVMe SSD'
      },
      performance: { games: 98, work: 95, streaming: 97 },
      stores: [
        { name: 'Регард', price: 350000, available: true },
        { name: 'DNS', price: 365000, available: true },
        { name: 'Ситилинк', price: 358000, available: false }
      ]
    },
    {
      id: 2,
      name: 'Профи Рабочая Станция',
      category: 'work',
      price: 280000,
      specs: {
        cpu: 'AMD Ryzen 9 7950X',
        gpu: 'RTX 4080 16GB',
        ram: '128GB DDR5',
        storage: '4TB NVMe SSD'
      },
      performance: { games: 85, work: 99, streaming: 90 },
      stores: [
        { name: 'Регард', price: 280000, available: true },
        { name: 'DNS', price: 295000, available: true },
        { name: 'Ситилинк', price: 285000, available: true }
      ]
    },
    {
      id: 3,
      name: 'Стример Про Max',
      category: 'streaming',
      price: 320000,
      specs: {
        cpu: 'Intel Core i9-14900KS',
        gpu: 'RTX 4090 24GB',
        ram: '64GB DDR5',
        storage: '2TB NVMe + 4TB HDD'
      },
      performance: { games: 96, work: 92, streaming: 99 },
      stores: [
        { name: 'Регард', price: 320000, available: true },
        { name: 'DNS', price: 335000, available: false },
        { name: 'Ситилинк', price: 328000, available: true }
      ]
    },
    {
      id: 4,
      name: 'Бюджетный Геймер',
      category: 'gaming',
      price: 85000,
      specs: {
        cpu: 'AMD Ryzen 5 7600',
        gpu: 'RTX 4060 8GB',
        ram: '16GB DDR5',
        storage: '1TB NVMe SSD'
      },
      performance: { games: 75, work: 65, streaming: 60 },
      stores: [
        { name: 'Регард', price: 85000, available: true },
        { name: 'DNS', price: 88000, available: true },
        { name: 'Ситилинк', price: 87000, available: true }
      ]
    },
    {
      id: 5,
      name: 'Офисный Комфорт',
      category: 'work',
      price: 55000,
      specs: {
        cpu: 'Intel Core i5-14400',
        gpu: 'Intel UHD 730',
        ram: '32GB DDR5',
        storage: '512GB NVMe SSD'
      },
      performance: { games: 35, work: 80, streaming: 40 },
      stores: [
        { name: 'Регард', price: 55000, available: true },
        { name: 'DNS', price: 58000, available: true },
        { name: 'Ситилинк', price: 56000, available: true }
      ]
    },
    {
      id: 6,
      name: 'Средний Универсал',
      category: 'gaming',
      price: 145000,
      specs: {
        cpu: 'AMD Ryzen 7 7800X3D',
        gpu: 'RTX 4070 12GB',
        ram: '32GB DDR5',
        storage: '2TB NVMe SSD'
      },
      performance: { games: 88, work: 82, streaming: 85 },
      stores: [
        { name: 'Регард', price: 145000, available: true },
        { name: 'DNS', price: 152000, available: true },
        { name: 'Ситилинк', price: 148000, available: true }
      ]
    }
  ];

  const guides = [
    {
      title: 'Как выбрать процессор в 2024',
      description: 'Полное руководство по выбору CPU для игр, работы и творчества',
      icon: 'Cpu',
      color: 'from-primary to-secondary'
    },
    {
      title: 'Видеокарта: что важно знать',
      description: 'Разбираемся в характеристиках GPU и выбираем оптимальную модель',
      icon: 'Monitor',
      color: 'from-secondary to-accent'
    },
    {
      title: 'RAM: сколько нужно в 2024',
      description: 'Оптимальный объем оперативной памяти для разных задач',
      icon: 'MemoryStick',
      color: 'from-accent to-primary'
    },
    {
      title: 'Охлаждение и корпус',
      description: 'Как не перегреть компоненты и выбрать правильный case',
      icon: 'Fan',
      color: 'from-primary to-accent'
    }
  ];

  const filteredBuilds = pcBuilds.filter(build => {
    const categoryMatch = selectedCategory === 'all' || build.category === selectedCategory;
    const priceMatch = 
      priceFilter === 'all' || 
      (priceFilter === 'budget' && build.price < 100000) ||
      (priceFilter === 'mid' && build.price >= 100000 && build.price < 250000) ||
      (priceFilter === 'high' && build.price >= 250000);
    return categoryMatch && priceMatch;
  });

  const getCheapestStore = (stores: typeof pcBuilds[0]['stores']) => {
    return stores.filter(s => s.available).sort((a, b) => a.price - b.price)[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-3xl" />
        
        <header className="relative z-10 border-b border-border/50 backdrop-blur-xl bg-background/50">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-xl transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <Icon name="Cpu" className="h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  PC Builder Pro
                </span>
              </div>
              
              <div className="hidden md:flex items-center gap-6">
                <a href="#catalog" className="text-foreground/80 hover:text-primary transition-colors font-medium">Каталог</a>
                <a href="#compare" className="text-foreground/80 hover:text-primary transition-colors font-medium">Сравнение</a>
                <a href="#guides" className="text-foreground/80 hover:text-primary transition-colors font-medium">Гайды</a>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transform hover:scale-105 transition-all shadow-lg shadow-primary/50">
                  <Icon name="Wrench" className="mr-2 h-4 w-4" />
                  Собрать ПК
                </Button>
              </div>
            </nav>
          </div>
        </header>

        <section className="relative z-10 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <Badge className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/50 text-primary px-4 py-2">
                🚀 Лучшие цены 2024
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Собери ПК мечты
                </span>
                <br />
                <span className="text-foreground">по лучшей цене</span>
              </h1>
              
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Сравниваем цены в DNS, Регард и Ситилинк. Экономьте до 25% на готовых сборках.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transform hover:scale-105 transition-all shadow-xl shadow-primary/50 text-lg">
                  <Icon name="Sparkles" className="mr-2 h-5 w-5" />
                  Подобрать сборку
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary/50 hover:bg-primary/10 text-lg transform hover:scale-105 transition-all">
                  <Icon name="Play" className="mr-2 h-5 w-5" />
                  Смотреть гайд
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="catalog" className="relative z-10 py-16 bg-gradient-to-b from-transparent to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Готовые сборки
                </span>
              </h2>
              <p className="text-foreground/60 text-lg">Выбери свою идеальную конфигурацию</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className={selectedCategory === 'all' ? 'bg-gradient-to-r from-primary to-secondary' : 'border-primary/30 hover:border-primary'}
              >
                <Icon name="Grid3x3" className="mr-2 h-4 w-4" />
                Все
              </Button>
              <Button
                variant={selectedCategory === 'gaming' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('gaming')}
                className={selectedCategory === 'gaming' ? 'bg-gradient-to-r from-primary to-secondary' : 'border-primary/30 hover:border-primary'}
              >
                <Icon name="Gamepad2" className="mr-2 h-4 w-4" />
                Игры
              </Button>
              <Button
                variant={selectedCategory === 'work' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('work')}
                className={selectedCategory === 'work' ? 'bg-gradient-to-r from-primary to-secondary' : 'border-primary/30 hover:border-primary'}
              >
                <Icon name="Briefcase" className="mr-2 h-4 w-4" />
                Работа
              </Button>
              <Button
                variant={selectedCategory === 'streaming' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('streaming')}
                className={selectedCategory === 'streaming' ? 'bg-gradient-to-r from-primary to-secondary' : 'border-primary/30 hover:border-primary'}
              >
                <Icon name="Radio" className="mr-2 h-4 w-4" />
                Стриминг
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button
                size="sm"
                variant={priceFilter === 'all' ? 'default' : 'ghost'}
                onClick={() => setPriceFilter('all')}
                className={priceFilter === 'all' ? 'bg-accent' : ''}
              >
                Все цены
              </Button>
              <Button
                size="sm"
                variant={priceFilter === 'budget' ? 'default' : 'ghost'}
                onClick={() => setPriceFilter('budget')}
                className={priceFilter === 'budget' ? 'bg-accent' : ''}
              >
                До 100к ₽
              </Button>
              <Button
                size="sm"
                variant={priceFilter === 'mid' ? 'default' : 'ghost'}
                onClick={() => setPriceFilter('mid')}
                className={priceFilter === 'mid' ? 'bg-accent' : ''}
              >
                100-250к ₽
              </Button>
              <Button
                size="sm"
                variant={priceFilter === 'high' ? 'default' : 'ghost'}
                onClick={() => setPriceFilter('high')}
                className={priceFilter === 'high' ? 'bg-accent' : ''}
              >
                250к+ ₽
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBuilds.map((build, index) => {
                const cheapest = getCheapestStore(build.stores);
                return (
                  <Card
                    key={build.id}
                    className="group relative bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <Badge className={`${
                          build.category === 'gaming' ? 'bg-primary/20 text-primary border-primary/50' :
                          build.category === 'work' ? 'bg-accent/20 text-accent border-accent/50' :
                          'bg-secondary/20 text-secondary border-secondary/50'
                        }`}>
                          <Icon 
                            name={
                              build.category === 'gaming' ? 'Gamepad2' : 
                              build.category === 'work' ? 'Briefcase' : 
                              'Radio'
                            } 
                            className="mr-1 h-3 w-3" 
                          />
                          {build.category === 'gaming' ? 'Gaming' : build.category === 'work' ? 'Work' : 'Streaming'}
                        </Badge>
                        
                        <div className="flex gap-2">
                          <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-primary/20">
                            <Icon name="Heart" className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-secondary/20">
                            <Icon name="Share2" className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {build.name}
                        </h3>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {cheapest.price.toLocaleString('ru-RU')} ₽
                          </span>
                          {build.stores.some(s => s.price > cheapest.price) && (
                            <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/50">
                              <Icon name="TrendingDown" className="mr-1 h-3 w-3" />
                              Лучшая цена
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-foreground/70">
                          <Icon name="Cpu" className="h-4 w-4 text-primary" />
                          <span>{build.specs.cpu}</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground/70">
                          <Icon name="Monitor" className="h-4 w-4 text-secondary" />
                          <span>{build.specs.gpu}</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground/70">
                          <Icon name="MemoryStick" className="h-4 w-4 text-accent" />
                          <span>{build.specs.ram} • {build.specs.storage}</span>
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <div className="flex justify-between text-xs text-foreground/60">
                          <span>Игры</span>
                          <span className="font-semibold text-primary">{build.performance.games}%</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                            style={{ width: `${build.performance.games}%` }}
                          />
                        </div>
                        
                        <div className="flex justify-between text-xs text-foreground/60">
                          <span>Работа</span>
                          <span className="font-semibold text-accent">{build.performance.work}%</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-accent rounded-full transition-all duration-1000"
                            style={{ width: `${build.performance.work}%` }}
                          />
                        </div>
                      </div>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="stores" className="border-border/50">
                          <AccordionTrigger className="text-sm hover:text-primary">
                            <div className="flex items-center gap-2">
                              <Icon name="Store" className="h-4 w-4" />
                              <span>Сравнить магазины ({build.stores.filter(s => s.available).length})</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2 pt-2">
                              {build.stores.map(store => (
                                <div 
                                  key={store.name}
                                  className={`flex items-center justify-between p-2 rounded-lg ${
                                    store.available ? 'bg-muted/50' : 'bg-muted/20 opacity-50'
                                  }`}
                                >
                                  <span className="text-sm font-medium">{store.name}</span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold">
                                      {store.price.toLocaleString('ru-RU')} ₽
                                    </span>
                                    {store.available ? (
                                      <Badge className="bg-green-500/20 text-green-400 border-green-500/50 text-xs">
                                        В наличии
                                      </Badge>
                                    ) : (
                                      <Badge variant="secondary" className="text-xs">Нет</Badge>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <div className="flex gap-2 pt-2">
                        <Button className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                          <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                          Купить
                        </Button>
                        <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                          <Icon name="GitCompare" className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="guides" className="relative z-10 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Гайды и статьи
                </span>
              </h2>
              <p className="text-foreground/60 text-lg">Узнай всё о комплектующих</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guides.map((guide, index) => (
                <Card
                  key={index}
                  className="group relative bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 overflow-hidden cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${guide.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative p-6 space-y-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${guide.color} flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon name={guide.icon as any} className="h-7 w-7 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-foreground/60">
                        {guide.description}
                      </p>
                    </div>
                    
                    <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                      Читать
                      <Icon name="ArrowRight" className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <footer className="relative z-10 border-t border-border/50 bg-card/30 backdrop-blur-xl mt-16">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-xl">
                    <Icon name="Cpu" className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    PC Builder
                  </span>
                </div>
                <p className="text-sm text-foreground/60">
                  Лучший сервис для подбора и сравнения сборок ПК по ценам в России
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Каталог</h4>
                <div className="space-y-2 text-sm text-foreground/60">
                  <a href="#" className="block hover:text-primary transition-colors">Игровые ПК</a>
                  <a href="#" className="block hover:text-primary transition-colors">Рабочие станции</a>
                  <a href="#" className="block hover:text-primary transition-colors">Для стриминга</a>
                  <a href="#" className="block hover:text-primary transition-colors">Бюджетные</a>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Информация</h4>
                <div className="space-y-2 text-sm text-foreground/60">
                  <a href="#" className="block hover:text-primary transition-colors">О нас</a>
                  <a href="#" className="block hover:text-primary transition-colors">Гайды</a>
                  <a href="#" className="block hover:text-primary transition-colors">FAQ</a>
                  <a href="#" className="block hover:text-primary transition-colors">Контакты</a>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Связь</h4>
                <div className="space-y-2 text-sm text-foreground/60">
                  <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Icon name="Mail" className="h-4 w-4" />
                    info@pcbuilder.ru
                  </a>
                  <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Icon name="Phone" className="h-4 w-4" />
                    +7 (800) 555-35-35
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border/50 text-center text-sm text-foreground/60">
              © 2024 PC Builder Pro. Все права защищены.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
