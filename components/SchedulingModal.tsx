import React, { useState, useMemo } from 'react';
import { 
  Clock, 
  MapPin, 
  Globe, 
  ChevronRight, 
  Star,
  ChevronLeft,
  CheckCircle2,
  ArrowLeft,
  Mail,
  Loader2,
  User,
  X
} from 'lucide-react';

interface SchedulingWidgetProps {
  currentUserEmail: string | null;
  onBookingConfirmed: (date: number, time: string, duration: string, email: string) => void;
}

const SchedulingWidget: React.FC<SchedulingWidgetProps> = ({ currentUserEmail, onBookingConfirmed }) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [duration, setDuration] = useState('1h');
  const [view, setView] = useState<'calendar' | 'time' | 'confirm-email' | 'success'>('calendar');
  const [tempEmail, setTempEmail] = useState('');
  
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const availableDates = [1, 6, 7, 8, 9, 15, 20, 21, 22, 27, 28, 29, 30];
  
  const timeSlots = useMemo(() => {
    return ['09:00am', '09:30am', '10:00am', '10:30am', '11:00am', '11:30am', '01:00pm', '01:30pm', '02:00pm'];
  }, []);

  const handleDateClick = (date: number) => {
    setSelectedDate(date);
    setView('time');
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    if (currentUserEmail) {
      onBookingConfirmed(selectedDate!, time, duration, currentUserEmail);
      setView('success');
    } else {
      setView('confirm-email');
    }
  };

  const handleGuestBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tempEmail || !tempEmail.includes('@')) return;
    onBookingConfirmed(selectedDate!, selectedTime!, duration, tempEmail);
    setView('success');
  };

  const reset = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setView('calendar');
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden w-full max-w-[850px] min-h-[500px] transition-all duration-500 ease-in-out">
      {/* Left Column: Meeting Details */}
      <div className="flex-1 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-100 bg-[#fafafa]/50 text-left">
        {view !== 'success' ? (
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                <img src="https://i.pravatar.cc/100?u=codex" alt="Codex Africa" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">Codex Africa Team</p>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Platform Demo</h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed font-medium">
              Schedule a personalized demo of the Codex Africa SACCO platform with our team.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-gray-500">
                <Clock size={18} className="text-gray-400" />
                <div className="flex gap-1.5 flex-wrap">
                  {['15m', '30m', '45m', '1h'].map((t) => (
                    <button 
                      key={t} 
                      onClick={() => setDuration(t)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${duration === t ? 'bg-gray-900 border-gray-900 text-white shadow-md' : 'border-gray-200 bg-white text-gray-400 hover:border-gray-300'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm font-bold">
                <MapPin size={18} className="text-gray-400" />
                Online Meeting
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm font-bold cursor-pointer hover:text-gray-900 transition-colors">
                <Globe size={18} className="text-gray-400" />
                Africa/Addis_Ababa <ChevronRight size={14} className="mt-0.5" />
              </div>
            </div>
          </>
        ) : (
          <div className="h-full flex flex-col justify-center items-center text-center py-10">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
               <CheckCircle2 size={32} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">Confirmed!</h3>
            <p className="text-sm text-gray-500 mb-8">
              Your demo is scheduled with Codex Africa on <br/>
              <span className="font-bold text-gray-900">January {selectedDate}, 2026</span> at <span className="font-bold text-gray-900">{selectedTime}</span>
            </p>
            <button 
              onClick={reset}
              className="px-6 py-2.5 bg-gray-100 text-gray-900 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all"
            >
              Schedule another
            </button>
          </div>
        )}
      </div>

      {/* Right Column: Dynamic View */}
      <div className="flex-1 p-8 lg:p-10 bg-white relative">
        {view === 'calendar' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center justify-between mb-8">
              <h4 className="font-black text-lg text-gray-900">January <span className="text-gray-400 font-medium">2026</span></h4>
              <div className="flex gap-1">
                <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 transition-colors"><ChevronLeft size={20} /></button>
                <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 transition-colors"><ChevronRight size={20} /></button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-y-3 text-center mb-6">
              {days.map(day => (
                <span key={day} className="text-[10px] font-black text-gray-400 tracking-widest">{day}</span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1.5">
              {[...Array(4)].map((_, i) => <div key={`empty-${i}`} />)}
              
              {dates.map(date => {
                const isAvailable = availableDates.includes(date);
                const isToday = date === 8;
                return (
                  <button 
                    key={date}
                    onClick={() => isAvailable && handleDateClick(date)}
                    className={`
                      aspect-square rounded-xl flex flex-col items-center justify-center text-sm font-bold transition-all relative group
                      ${isAvailable ? 'bg-gray-50 text-gray-900 hover:bg-gray-200 cursor-pointer' : 'text-gray-200 cursor-default pointer-events-none'}
                      ${isToday ? 'bg-gray-900 text-white hover:bg-black shadow-lg z-10' : ''}
                    `}
                  >
                    {date}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {view === 'time' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 h-full flex flex-col text-left">
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={() => setView('calendar')}
                className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <h4 className="font-black text-lg text-gray-900">
                January {selectedDate}
              </h4>
            </div>
            
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Select a time</p>
            
            <div className="grid grid-cols-1 gap-2 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeClick(time)}
                  className="w-full py-3 px-4 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:border-gray-900 hover:bg-gray-50 transition-all flex justify-between items-center group"
                >
                  {time}
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        )}

        {view === 'confirm-email' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 h-full flex flex-col text-left">
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={() => setView('time')}
                className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <h4 className="font-black text-lg text-gray-900">Final Step</h4>
            </div>
            <p className="text-sm font-semibold text-gray-500 mb-6">Enter your email to confirm your demo for January {selectedDate} at {selectedTime}.</p>
            <form onSubmit={handleGuestBooking} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  autoFocus
                  type="email" 
                  value={tempEmail}
                  onChange={(e) => setTempEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl font-bold focus:border-gray-900 focus:bg-white outline-none transition-all text-gray-900"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3.5 bg-gray-900 text-white rounded-2xl font-black hover:bg-black transition-all shadow-lg"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        )}

        {view === 'success' && (
          <div className="h-full flex items-center justify-center animate-in zoom-in-95 duration-500">
             <div className="text-center">
                <div className="text-[64px] mb-4">🎉</div>
                <div className="text-sm font-bold text-gray-400">Calendar invite sent</div>
             </div>
          </div>
        )}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e2e2;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d1d1d1;
        }
      `}</style>
    </div>
  );
};

interface SchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SchedulingModal: React.FC<SchedulingModalProps> = ({ isOpen, onClose }) => {
  const [email] = useState<string | null>(null);

  const handleConfirmedBooking = (date: number, time: string, duration: string, bookingEmail: string) => {
    console.log('Booking confirmed:', { date, time, duration, bookingEmail });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative max-w-5xl w-full animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} className="text-gray-900" />
        </button>
        <SchedulingWidget 
          currentUserEmail={email} 
          onBookingConfirmed={handleConfirmedBooking}
        />
      </div>
    </div>
  );
};

export default SchedulingModal;
