// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('clojure.string');
goog.require('goog.date.Interval');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * **Note:** Equality in goog.date.* (and also with plain
 * javascript dates) is not the same as in Joda/clj-time. Two date
 * objects representing the same instant in time in goog.date.* are not
 * equal.
 * 
 * If you need to test for equality use either `cljs-time.core/=`, or
 * optionally you can require the `cljs-time.extend` namespace which will
 * extend the goog.date.* datatypes, so that clojure.core/= works as
 * expected.
 */
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

/**
 * Interface for various date time functions
 * @interface
 */
cljs_time.core.DateTimeProtocol = function(){};

/**
 * Return the year component of the given date/time.
 */
cljs_time.core.year = (function cljs_time$core$year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.year[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.year["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.year",this$);
}
}
}
});

/**
 * Return the month component of the given date/time.
 */
cljs_time.core.month = (function cljs_time$core$month(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$month$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.month[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.month["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.month",this$);
}
}
}
});

/**
 * Return the day of month component of the given date/time.
 */
cljs_time.core.day = (function cljs_time$core$day(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.day[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.day["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day",this$);
}
}
}
});

/**
 * Return the day of week component of the given date/time. Monday is 1 and Sunday is 7
 */
cljs_time.core.day_of_week = (function cljs_time$core$day_of_week(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day-of-week",this$);
}
}
}
});

/**
 * Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.
 */
cljs_time.core.hour = (function cljs_time$core$hour(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$hour$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.hour[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.hour["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.hour",this$);
}
}
}
});

/**
 * Return the minute of hour component of the given date/time.
 */
cljs_time.core.minute = (function cljs_time$core$minute(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minute$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.minute[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.minute["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minute",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.sec = (function cljs_time$core$sec(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$sec$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.sec[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.sec["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.sec",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.second = (function cljs_time$core$second(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$second$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.second[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.second["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.second",this$);
}
}
}
});

/**
 * Return the millisecond of second component of the given date/time.
 */
cljs_time.core.milli = (function cljs_time$core$milli(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$milli$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.milli[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.milli["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.milli",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly equal to date/time 'that'.
 */
cljs_time.core.equal_QMARK_ = (function cljs_time$core$equal_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2(this$,that);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.equal_QMARK_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$,that);
} else {
var m__7081__auto____$1 = (cljs_time.core.equal_QMARK_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.equal?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly after date/time 'that'.
 */
cljs_time.core.after_QMARK_ = (function cljs_time$core$after_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$,that);
} else {
var m__7081__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.after?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly before date/time 'that'.
 */
cljs_time.core.before_QMARK_ = (function cljs_time$core$before_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$,that);
} else {
var m__7081__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.before?",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).
 */
cljs_time.core.plus_ = (function cljs_time$core$plus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$plus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.plus_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$,period);
} else {
var m__7081__auto____$1 = (cljs_time.core.plus_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.plus-",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).
 */
cljs_time.core.minus_ = (function cljs_time$core$minus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.minus_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$,period);
} else {
var m__7081__auto____$1 = (cljs_time.core.minus_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minus-",this$);
}
}
}
});

/**
 * Returns the first day of the month
 */
cljs_time.core.first_day_of_the_month_ = (function cljs_time$core$first_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.first_day_of_the_month_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.first-day-of-the-month-",this$);
}
}
}
});

/**
 * Returns the last day of the month
 */
cljs_time.core.last_day_of_the_month_ = (function cljs_time$core$last_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.last_day_of_the_month_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.last-day-of-the-month-",this$);
}
}
}
});


/**
 * Interface for in-<time unit> functions
 * @interface
 */
cljs_time.core.InTimeUnitProtocol = function(){};

/**
 * Return the time in milliseconds.
 */
cljs_time.core.in_millis = (function cljs_time$core$in_millis(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.in_millis[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.in_millis["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-millis",this$);
}
}
}
});

/**
 * Return the time in seconds.
 */
cljs_time.core.in_seconds = (function cljs_time$core$in_seconds(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.in_seconds[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.in_seconds["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-seconds",this$);
}
}
}
});

/**
 * Return the time in minutes.
 */
cljs_time.core.in_minutes = (function cljs_time$core$in_minutes(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.in_minutes[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.in_minutes["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-minutes",this$);
}
}
}
});

/**
 * Return the time in hours.
 */
cljs_time.core.in_hours = (function cljs_time$core$in_hours(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.in_hours[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.in_hours["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-hours",this$);
}
}
}
});

/**
 * Return the time in days.
 */
cljs_time.core.in_days = (function cljs_time$core$in_days(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.in_days[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.in_days["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-days",this$);
}
}
}
});

/**
 * Return the time in weeks
 */
cljs_time.core.in_weeks = (function cljs_time$core$in_weeks(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.in_weeks[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.in_weeks["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-weeks",this$);
}
}
}
});

/**
 * Return the time in months
 */
cljs_time.core.in_months = (function cljs_time$core$in_months(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.in_months[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.in_months["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-months",this$);
}
}
}
});

/**
 * Return the time in years
 */
cljs_time.core.in_years = (function cljs_time$core$in_years(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (cljs_time.core.in_years[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,this$);
} else {
var m__7081__auto____$1 = (cljs_time.core.in_years["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-years",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Interval = (function (start,end,__meta,__extmap,__hash){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7039__auto__,k__7040__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return cljs.core._lookup.call(null,this__7039__auto____$1,k__7040__auto__,null);
});

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7041__auto__,k10786,else__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
var G__10788 = (((k10786 instanceof cljs.core.Keyword))?k10786.fqn:null);
switch (G__10788) {
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10786,else__7042__auto__);

}
});

cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7053__auto__,writer__7054__auto__,opts__7055__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
var pr_pair__7056__auto__ = ((function (this__7053__auto____$1){
return (function (keyval__7057__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7054__auto__,cljs.core.pr_writer,""," ","",opts__7055__auto__,keyval__7057__auto__);
});})(this__7053__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7054__auto__,pr_pair__7056__auto__,"#cljs-time.core.Interval{",", ","}",opts__7055__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IIterable$ = true;

cljs_time.core.Interval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10785){
var self__ = this;
var G__10785__$1 = this;
return (new cljs.core.RecordIter((0),G__10785__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7037__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7033__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
var h__6852__auto__ = self__.__hash;
if(!((h__6852__auto__ == null))){
return h__6852__auto__;
} else {
var h__6852__auto____$1 = cljs.core.hash_imap.call(null,this__7034__auto____$1);
self__.__hash = h__6852__auto____$1;

return h__6852__auto____$1;
}
});

cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7035__auto__,other__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6405__auto__ = other__7036__auto__;
if(cljs.core.truth_(and__6405__auto__)){
var and__6405__auto____$1 = (this__7035__auto____$1.constructor === other__7036__auto__.constructor);
if(and__6405__auto____$1){
return cljs.core.equiv_map.call(null,this__7035__auto____$1,other__7036__auto__);
} else {
return and__6405__auto____$1;
}
} else {
return and__6405__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7048__auto__,k__7049__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null), null),k__7049__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7048__auto____$1),self__.__meta),k__7049__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7049__auto__)),null));
}
});

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7046__auto__,k__7047__auto__,G__10785){
var self__ = this;
var this__7046__auto____$1 = this;
var pred__10789 = cljs.core.keyword_identical_QMARK_;
var expr__10790 = k__7047__auto__;
if(cljs.core.truth_(pred__10789.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__10790))){
return (new cljs_time.core.Interval(G__10785,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10789.call(null,new cljs.core.Keyword(null,"end","end",-268185958),expr__10790))){
return (new cljs_time.core.Interval(self__.start,G__10785,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7047__auto__,G__10785),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7051__auto__){
var self__ = this;
var this__7051__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7038__auto__,G__10785){
var self__ = this;
var this__7038__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__10785,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7044__auto__,entry__7045__auto__){
var self__ = this;
var this__7044__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7045__auto__)){
return cljs.core._assoc.call(null,this__7044__auto____$1,cljs.core._nth.call(null,entry__7045__auto__,(0)),cljs.core._nth.call(null,entry__7045__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7044__auto____$1,entry__7045__auto__);
}
});

cljs_time.core.Interval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null);
});

cljs_time.core.Interval.cljs$lang$type = true;

cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__7073__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Interval");
});

cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__7073__auto__,writer__7074__auto__){
return cljs.core._write.call(null,writer__7074__auto__,"cljs-time.core/Interval");
});

cljs_time.core.__GT_Interval = (function cljs_time$core$__GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

cljs_time.core.map__GT_Interval = (function cljs_time$core$map__GT_Interval(G__10787){
return (new cljs_time.core.Interval(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__10787),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__10787),null,cljs.core.dissoc.call(null,G__10787,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)),null));
});

/**
 * Returns an Interval representing the span between the two given DateTime.
 *   Note that intervals are closed on the left and open on the right.
 */
cljs_time.core.interval = (function cljs_time$core$interval(start,end){
if((start.getTime() <= end.getTime())){
} else {
throw (new Error("Assert failed: (<= (.getTime start) (.getTime end))"));
}

return cljs_time.core.__GT_Interval.call(null,start,end);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap,__hash){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7039__auto__,k__7040__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return cljs.core._lookup.call(null,this__7039__auto____$1,k__7040__auto__,null);
});

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7041__auto__,k10794,else__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
var G__10796 = (((k10794 instanceof cljs.core.Keyword))?k10794.fqn:null);
switch (G__10796) {
case "years":
return self__.years;

break;
case "months":
return self__.months;

break;
case "weeks":
return self__.weeks;

break;
case "days":
return self__.days;

break;
case "hours":
return self__.hours;

break;
case "minutes":
return self__.minutes;

break;
case "seconds":
return self__.seconds;

break;
case "millis":
return self__.millis;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10794,else__7042__auto__);

}
});

cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7053__auto__,writer__7054__auto__,opts__7055__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
var pr_pair__7056__auto__ = ((function (this__7053__auto____$1){
return (function (keyval__7057__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7054__auto__,cljs.core.pr_writer,""," ","",opts__7055__auto__,keyval__7057__auto__);
});})(this__7053__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7054__auto__,pr_pair__7056__auto__,"#cljs-time.core.Period{",", ","}",opts__7055__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IIterable$ = true;

cljs_time.core.Period.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10793){
var self__ = this;
var G__10793__$1 = this;
return (new cljs.core.RecordIter((0),G__10793__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7037__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7033__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
var h__6852__auto__ = self__.__hash;
if(!((h__6852__auto__ == null))){
return h__6852__auto__;
} else {
var h__6852__auto____$1 = cljs.core.hash_imap.call(null,this__7034__auto____$1);
self__.__hash = h__6852__auto____$1;

return h__6852__auto____$1;
}
});

cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7035__auto__,other__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6405__auto__ = other__7036__auto__;
if(cljs.core.truth_(and__6405__auto__)){
var and__6405__auto____$1 = (this__7035__auto____$1.constructor === other__7036__auto__.constructor);
if(and__6405__auto____$1){
return cljs.core.equiv_map.call(null,this__7035__auto____$1,other__7036__auto__);
} else {
return and__6405__auto____$1;
}
} else {
return and__6405__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7048__auto__,k__7049__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null,new cljs.core.Keyword(null,"millis","millis",-1338288387),null], null), null),k__7049__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7048__auto____$1),self__.__meta),k__7049__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7049__auto__)),null));
}
});

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7046__auto__,k__7047__auto__,G__10793){
var self__ = this;
var this__7046__auto____$1 = this;
var pred__10797 = cljs.core.keyword_identical_QMARK_;
var expr__10798 = k__7047__auto__;
if(cljs.core.truth_(pred__10797.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),expr__10798))){
return (new cljs_time.core.Period(G__10793,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10797.call(null,new cljs.core.Keyword(null,"months","months",-45571637),expr__10798))){
return (new cljs_time.core.Period(self__.years,G__10793,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10797.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),expr__10798))){
return (new cljs_time.core.Period(self__.years,self__.months,G__10793,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10797.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),expr__10798))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__10793,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10797.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),expr__10798))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__10793,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10797.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),expr__10798))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__10793,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10797.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),expr__10798))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__10793,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10797.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),expr__10798))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__10793,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7047__auto__,G__10793),null));
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7051__auto__){
var self__ = this;
var this__7051__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7038__auto__,G__10793){
var self__ = this;
var this__7038__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__10793,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7044__auto__,entry__7045__auto__){
var self__ = this;
var this__7044__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7045__auto__)){
return cljs.core._assoc.call(null,this__7044__auto____$1,cljs.core._nth.call(null,entry__7045__auto__,(0)),cljs.core._nth.call(null,entry__7045__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7044__auto____$1,entry__7045__auto__);
}
});

cljs_time.core.Period.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"years","years",341951838,null),new cljs.core.Symbol(null,"months","months",1594959890,null),new cljs.core.Symbol(null,"weeks","weeks",-809839644,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"hours","hours",1698912382,null),new cljs.core.Symbol(null,"minutes","minutes",-1335269375,null),new cljs.core.Symbol(null,"seconds","seconds",1195265333,null),new cljs.core.Symbol(null,"millis","millis",302243140,null)], null);
});

cljs_time.core.Period.cljs$lang$type = true;

cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__7073__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Period");
});

cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__7073__auto__,writer__7074__auto__){
return cljs.core._write.call(null,writer__7074__auto__,"cljs-time.core/Period");
});

cljs_time.core.__GT_Period = (function cljs_time$core$__GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

cljs_time.core.map__GT_Period = (function cljs_time$core$map__GT_Period(G__10795){
return (new cljs_time.core.Period(new cljs.core.Keyword(null,"years","years",-1298579689).cljs$core$IFn$_invoke$arity$1(G__10795),new cljs.core.Keyword(null,"months","months",-45571637).cljs$core$IFn$_invoke$arity$1(G__10795),new cljs.core.Keyword(null,"weeks","weeks",1844596125).cljs$core$IFn$_invoke$arity$1(G__10795),new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$1(G__10795),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(G__10795),new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(G__10795),new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(G__10795),new cljs.core.Keyword(null,"millis","millis",-1338288387).cljs$core$IFn$_invoke$arity$1(G__10795),null,cljs.core.dissoc.call(null,G__10795,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387)),null));
});

cljs_time.core.period = (function cljs_time$core$period(var_args){
var args10801 = [];
var len__7492__auto___10807 = arguments.length;
var i__7493__auto___10808 = (0);
while(true){
if((i__7493__auto___10808 < len__7492__auto___10807)){
args10801.push((arguments[i__7493__auto___10808]));

var G__10809 = (i__7493__auto___10808 + (1));
i__7493__auto___10808 = G__10809;
continue;
} else {
}
break;
}

var G__10806 = args10801.length;
switch (G__10806) {
case 2:
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args10801.slice((2)),(0),null));
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7511__auto__);

}
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$2 = (function (period,value){
return cljs_time.core.map__GT_Period.call(null,cljs.core.PersistentArrayMap.fromArray([period,value], true, false));
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic = (function (p1,v1,kvs){
return cljs.core.apply.call(null,cljs.core.assoc,cljs_time.core.period.call(null,p1,v1),kvs);
});

cljs_time.core.period.cljs$lang$applyTo = (function (seq10802){
var G__10803 = cljs.core.first.call(null,seq10802);
var seq10802__$1 = cljs.core.next.call(null,seq10802);
var G__10804 = cljs.core.first.call(null,seq10802__$1);
var seq10802__$2 = cljs.core.next.call(null,seq10802__$1);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(G__10803,G__10804,seq10802__$2);
});

cljs_time.core.period.cljs$lang$maxFixedArity = (2);

cljs_time.core.periods = (function (){var fixed_time_fn = (function (f,set_fn,op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
set_fn.call(null,date__$1,op.call(null,f.call(null,date__$1),value));
} else {
}

return date__$1;
});
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"millis","millis",-1338288387),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.milli,((function (fixed_time_fn){
return (function (p1__10811_SHARP_,p2__10812_SHARP_){
return p1__10811_SHARP_.setMilliseconds(p2__10812_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"seconds","seconds",-445266194),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.second,((function (fixed_time_fn){
return (function (p1__10813_SHARP_,p2__10814_SHARP_){
return p1__10813_SHARP_.setSeconds(p2__10814_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"minutes","minutes",1319166394),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.minute,((function (fixed_time_fn){
return (function (p1__10815_SHARP_,p2__10816_SHARP_){
return p1__10815_SHARP_.setMinutes(p2__10816_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"hours","hours",58380855),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.hour,((function (fixed_time_fn){
return (function (p1__10817_SHARP_,p2__10818_SHARP_){
return p1__10817_SHARP_.setHours(p2__10818_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.day,((function (fixed_time_fn){
return (function (p1__10819_SHARP_,p2__10820_SHARP_){
return p1__10819_SHARP_.setDate(p2__10820_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"weeks","weeks",1844596125),((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
date__$1.setDate(op.call(null,cljs_time.core.day.call(null,date__$1),((7) * value)));
} else {
}

return date__$1;
});})(fixed_time_fn))
,new cljs.core.Keyword(null,"months","months",-45571637),((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var m_10821 = op.call(null,(0),value);
var i_10822 = (new goog.date.Interval(goog.date.Interval.MONTHS,m_10821));
date__$1.add(i_10822);
} else {
}

return date__$1;
});})(fixed_time_fn))
,new cljs.core.Keyword(null,"years","years",-1298579689),((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
if(cljs.core.truth_((function (){var and__6405__auto__ = cljs_time.internal.core.leap_year_QMARK_.call(null,cljs_time.core.year.call(null,date__$1));
if(cljs.core.truth_(and__6405__auto__)){
var and__6405__auto____$1 = cljs_time.core._EQ_.call(null,(2),cljs_time.core.month.call(null,date__$1));
if(cljs.core.truth_(and__6405__auto____$1)){
return cljs_time.core._EQ_.call(null,(29),cljs_time.core.day.call(null,date__$1));
} else {
return and__6405__auto____$1;
}
} else {
return and__6405__auto__;
}
})())){
date__$1.setDate((28));
} else {
}

date__$1.setYear(op.call(null,cljs_time.core.year.call(null,date__$1),value));
} else {
}

return date__$1;
});})(fixed_time_fn))
], null);
})();
cljs_time.core.period_fn = (function cljs_time$core$period_fn(p){
return (function (operator,date){
return cljs.core.reduce.call(null,(function (d,p__10827){
var vec__10828 = p__10827;
var k = cljs.core.nth.call(null,vec__10828,(0),null);
var v = cljs.core.nth.call(null,vec__10828,(1),null);
return cljs_time.core.periods.call(null,k).call(null,operator,d,v);
}),date,p);
});
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});
cljs_time.core.utc = ({"id": "UTC", "std_offset": (0), "names": new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null), "transitions": cljs.core.PersistentVector.EMPTY});
cljs_time.core.default_ms_fn = (function cljs_time$core$default_ms_fn(){
return (function (){
return Date.now();
});
});
cljs_time.core.offset_ms_fn = (function cljs_time$core$offset_ms_fn(offset){
return (function (){
return (Date.now() + offset);
});
});
cljs_time.core.static_ms_fn = (function cljs_time$core$static_ms_fn(ms){
return (function (){
return ms;
});
});
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.default_ms_fn.call(null);
/**
 * Returns a DateTime for the current instant in the UTC time zone.
 */
cljs_time.core.now = (function cljs_time$core$now(){
var G__10832 = (new goog.date.UtcDateTime());
G__10832.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__10832;
});
/**
 * Returns a local DateTime for the current instant without date or time zone
 *   in the current time zone.
 */
cljs_time.core.time_now = (function cljs_time$core$time_now(){
var G__10834 = (new goog.date.DateTime());
G__10834.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__10834;
});
cljs_time.core.at_midnight = (function cljs_time$core$at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__10836 = datetime__$1;
G__10836.setHours((0));

G__10836.setMinutes((0));

G__10836.setSeconds((0));

G__10836.setMilliseconds((0));

return G__10836;
});
/**
 * Returns a DateTime for today at midnight in the UTC time zone.
 */
cljs_time.core.today_at_midnight = (function cljs_time$core$today_at_midnight(){
return cljs_time.core.at_midnight.call(null,cljs_time.core.now.call(null));
});
/**
 * Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
 */
cljs_time.core.epoch = (function cljs_time$core$epoch(){
var G__10838 = (new goog.date.UtcDateTime());
G__10838.setTime((0));

return G__10838;
});
/**
 * Constructs and returns a new DateTime at midnight in UTC.
 * 
 *   Specify the year, month of year, day of month. Note that month and day are
 *   1-indexed. Any number of least-significant components can be ommited, in
 *   which case they will default to 1.
 */
cljs_time.core.date_midnight = (function cljs_time$core$date_midnight(var_args){
var args10839 = [];
var len__7492__auto___10842 = arguments.length;
var i__7493__auto___10843 = (0);
while(true){
if((i__7493__auto___10843 < len__7492__auto___10842)){
args10839.push((arguments[i__7493__auto___10843]));

var G__10844 = (i__7493__auto___10843 + (1));
i__7493__auto___10843 = G__10844;
continue;
} else {
}
break;
}

var G__10841 = args10839.length;
switch (G__10841) {
case 1:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10839.length)].join('')));

}
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_midnight.call(null,year,(1),(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_midnight.call(null,year,month,(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
});

cljs_time.core.date_midnight.cljs$lang$maxFixedArity = 3;

/**
 * Constructs and returns a new DateTime in UTC.
 * 
 *   Specify the year, month of year, day of month, hour of day, minute if hour,
 *   second of minute, and millisecond of second. Note that month and day are
 *   1-indexed while hour, second, minute, and millis are 0-indexed.
 * 
 *   Any number of least-significant components can be ommited, in which case
 *   they will default to 1 or 0 as appropriate.
 */
cljs_time.core.date_time = (function cljs_time$core$date_time(var_args){
var args10846 = [];
var len__7492__auto___10849 = arguments.length;
var i__7493__auto___10850 = (0);
while(true){
if((i__7493__auto___10850 < len__7492__auto___10849)){
args10846.push((arguments[i__7493__auto___10850]));

var G__10851 = (i__7493__auto___10850 + (1));
i__7493__auto___10850 = G__10851;
continue;
} else {
}
break;
}

var G__10848 = args10846.length;
switch (G__10848) {
case 1:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10846.length)].join('')));

}
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.date_time.cljs$lang$maxFixedArity = 7;

/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month of year, day of month, hour of day, minute of hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
cljs_time.core.local_date_time = (function cljs_time$core$local_date_time(var_args){
var args10853 = [];
var len__7492__auto___10856 = arguments.length;
var i__7493__auto___10857 = (0);
while(true){
if((i__7493__auto___10857 < len__7492__auto___10856)){
args10853.push((arguments[i__7493__auto___10857]));

var G__10858 = (i__7493__auto___10857 + (1));
i__7493__auto___10857 = G__10858;
continue;
} else {
}
break;
}

var G__10855 = args10853.length;
switch (G__10855) {
case 1:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10853.length)].join('')));

}
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.local_date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.local_date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.local_date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.local_date_time.cljs$lang$maxFixedArity = 7;

/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month, and day. Does not deal with timezones.
 */
cljs_time.core.local_date = (function cljs_time$core$local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
 * Constructs and returns a new local DateTime representing today's date.
 *   local DateTime objects do not deal with timezones at all.
 */
cljs_time.core.today = (function cljs_time$core$today(){
var G__10861 = (new goog.date.Date());
G__10861.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__10861;
});
/**
 * Returns a timezone map for the given offset, specified either in hours or
 *   hours and minutes.
 */
cljs_time.core.time_zone_for_offset = (function cljs_time$core$time_zone_for_offset(var_args){
var args10862 = [];
var len__7492__auto___10865 = arguments.length;
var i__7493__auto___10866 = (0);
while(true){
if((i__7493__auto___10866 < len__7492__auto___10865)){
args10862.push((arguments[i__7493__auto___10866]));

var G__10867 = (i__7493__auto___10866 + (1));
i__7493__auto___10866 = G__10867;
continue;
} else {
}
break;
}

var G__10864 = args10862.length;
switch (G__10864) {
case 1:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10862.length)].join('')));

}
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = (function (hours){
return cljs_time.core.time_zone_for_offset.call(null,hours,null);
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
var sign = (((hours < (0)))?new cljs.core.Keyword(null,"-","-",-2112348439):new cljs.core.Keyword(null,"+","+",1913524883));
var fmt = [cljs.core.str("UTC%s%02d"),cljs.core.str((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1,minutes):cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1));
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),tz_name,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__6417__auto__ = minutes;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return (0);
}
})(),(0)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),"-",new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.core","time-zone","cljs-time.core/time-zone",751963705)], null));
});

cljs_time.core.time_zone_for_offset.cljs$lang$maxFixedArity = 2;

/**
 * Returns the default timezone map for the current environment.
 */
cljs_time.core.default_time_zone = (function cljs_time$core$default_time_zone(){
var offset = (function (){var G__10870 = (new goog.date.DateTime());
G__10870.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__10870;
})().getTimezoneOffset();
var hours = (((-1) * offset) / (60));
return cljs_time.core.time_zone_for_offset.call(null,(hours | (0)),cljs.core.mod.call(null,hours,(1)));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to in the default
 *   (local) timezone.
 */
cljs_time.core.to_default_time_zone = (function cljs_time$core$to_default_time_zone(dt){
return (new goog.date.DateTime(dt));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the default (local) timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
cljs_time.core.from_default_time_zone = (function cljs_time$core$from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
 * Given a number, returns a Period representing that many years.
 *   Without an argument, returns a Period representing only years.
 */
cljs_time.core.years = (function cljs_time$core$years(var_args){
var args10871 = [];
var len__7492__auto___10874 = arguments.length;
var i__7493__auto___10875 = (0);
while(true){
if((i__7493__auto___10875 < len__7492__auto___10874)){
args10871.push((arguments[i__7493__auto___10875]));

var G__10876 = (i__7493__auto___10875 + (1));
i__7493__auto___10875 = G__10876;
continue;
} else {
}
break;
}

var G__10873 = args10871.length;
switch (G__10873) {
case 0:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10871.length)].join('')));

}
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.years.call(null,null);
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),n);
});

cljs_time.core.years.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many months.
 *   Without an argument, returns a Period representing only months.
 */
cljs_time.core.months = (function cljs_time$core$months(var_args){
var args10878 = [];
var len__7492__auto___10881 = arguments.length;
var i__7493__auto___10882 = (0);
while(true){
if((i__7493__auto___10882 < len__7492__auto___10881)){
args10878.push((arguments[i__7493__auto___10882]));

var G__10883 = (i__7493__auto___10882 + (1));
i__7493__auto___10882 = G__10883;
continue;
} else {
}
break;
}

var G__10880 = args10878.length;
switch (G__10880) {
case 0:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10878.length)].join('')));

}
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.months.call(null,null);
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"months","months",-45571637),n);
});

cljs_time.core.months.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many weeks.
 *   Without an argument, returns a Period representing only weeks.
 */
cljs_time.core.weeks = (function cljs_time$core$weeks(var_args){
var args10885 = [];
var len__7492__auto___10888 = arguments.length;
var i__7493__auto___10889 = (0);
while(true){
if((i__7493__auto___10889 < len__7492__auto___10888)){
args10885.push((arguments[i__7493__auto___10889]));

var G__10890 = (i__7493__auto___10889 + (1));
i__7493__auto___10889 = G__10890;
continue;
} else {
}
break;
}

var G__10887 = args10885.length;
switch (G__10887) {
case 0:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10885.length)].join('')));

}
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.weeks.call(null,null);
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),n);
});

cljs_time.core.weeks.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many days.
 *   Without an argument, returns a Period representing only days.
 */
cljs_time.core.days = (function cljs_time$core$days(var_args){
var args10892 = [];
var len__7492__auto___10895 = arguments.length;
var i__7493__auto___10896 = (0);
while(true){
if((i__7493__auto___10896 < len__7492__auto___10895)){
args10892.push((arguments[i__7493__auto___10896]));

var G__10897 = (i__7493__auto___10896 + (1));
i__7493__auto___10896 = G__10897;
continue;
} else {
}
break;
}

var G__10894 = args10892.length;
switch (G__10894) {
case 0:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10892.length)].join('')));

}
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.days.call(null,null);
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),n);
});

cljs_time.core.days.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many hours.
 *   Without an argument, returns a Period representing only hours.
 */
cljs_time.core.hours = (function cljs_time$core$hours(var_args){
var args10899 = [];
var len__7492__auto___10902 = arguments.length;
var i__7493__auto___10903 = (0);
while(true){
if((i__7493__auto___10903 < len__7492__auto___10902)){
args10899.push((arguments[i__7493__auto___10903]));

var G__10904 = (i__7493__auto___10903 + (1));
i__7493__auto___10903 = G__10904;
continue;
} else {
}
break;
}

var G__10901 = args10899.length;
switch (G__10901) {
case 0:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10899.length)].join('')));

}
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.hours.call(null,null);
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),n);
});

cljs_time.core.hours.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many minutes.
 *   Without an argument, returns a Period representing only minutes.
 */
cljs_time.core.minutes = (function cljs_time$core$minutes(var_args){
var args10906 = [];
var len__7492__auto___10909 = arguments.length;
var i__7493__auto___10910 = (0);
while(true){
if((i__7493__auto___10910 < len__7492__auto___10909)){
args10906.push((arguments[i__7493__auto___10910]));

var G__10911 = (i__7493__auto___10910 + (1));
i__7493__auto___10910 = G__10911;
continue;
} else {
}
break;
}

var G__10908 = args10906.length;
switch (G__10908) {
case 0:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10906.length)].join('')));

}
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.minutes.call(null,null);
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),n);
});

cljs_time.core.minutes.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many seconds.
 *   Without an argument, returns a Period representing only seconds.
 */
cljs_time.core.seconds = (function cljs_time$core$seconds(var_args){
var args10913 = [];
var len__7492__auto___10916 = arguments.length;
var i__7493__auto___10917 = (0);
while(true){
if((i__7493__auto___10917 < len__7492__auto___10916)){
args10913.push((arguments[i__7493__auto___10917]));

var G__10918 = (i__7493__auto___10917 + (1));
i__7493__auto___10917 = G__10918;
continue;
} else {
}
break;
}

var G__10915 = args10913.length;
switch (G__10915) {
case 0:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10913.length)].join('')));

}
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.seconds.call(null,null);
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),n);
});

cljs_time.core.seconds.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many milliseconds.
 *   Without an argument, returns a Period representing only milliseconds.
 */
cljs_time.core.millis = (function cljs_time$core$millis(var_args){
var args10920 = [];
var len__7492__auto___10923 = arguments.length;
var i__7493__auto___10924 = (0);
while(true){
if((i__7493__auto___10924 < len__7492__auto___10923)){
args10920.push((arguments[i__7493__auto___10924]));

var G__10925 = (i__7493__auto___10924 + (1));
i__7493__auto___10924 = G__10925;
continue;
} else {
}
break;
}

var G__10922 = args10920.length;
switch (G__10922) {
case 0:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10920.length)].join('')));

}
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.millis.call(null,null);
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),n);
});

cljs_time.core.millis.cljs$lang$maxFixedArity = 1;

/**
 * Returns a new date/time corresponding to the given date/time moved
 *   forwards by the given Period(s).
 */
cljs_time.core.plus = (function cljs_time$core$plus(var_args){
var args10927 = [];
var len__7492__auto___10933 = arguments.length;
var i__7493__auto___10934 = (0);
while(true){
if((i__7493__auto___10934 < len__7492__auto___10933)){
args10927.push((arguments[i__7493__auto___10934]));

var G__10935 = (i__7493__auto___10934 + (1));
i__7493__auto___10934 = G__10935;
continue;
} else {
}
break;
}

var G__10932 = args10927.length;
switch (G__10932) {
case 2:
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args10927.slice((2)),(0),null));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7511__auto__);

}
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.plus_.call(null,dt,p);
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.plus_,cljs_time.core.plus_.call(null,dt,p),ps);
});

cljs_time.core.plus.cljs$lang$applyTo = (function (seq10928){
var G__10929 = cljs.core.first.call(null,seq10928);
var seq10928__$1 = cljs.core.next.call(null,seq10928);
var G__10930 = cljs.core.first.call(null,seq10928__$1);
var seq10928__$2 = cljs.core.next.call(null,seq10928__$1);
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic(G__10929,G__10930,seq10928__$2);
});

cljs_time.core.plus.cljs$lang$maxFixedArity = (2);

/**
 * Returns a new date/time object corresponding to the given date/time
 *   moved backwards by the given Period(s).
 */
cljs_time.core.minus = (function cljs_time$core$minus(var_args){
var args10937 = [];
var len__7492__auto___10943 = arguments.length;
var i__7493__auto___10944 = (0);
while(true){
if((i__7493__auto___10944 < len__7492__auto___10943)){
args10937.push((arguments[i__7493__auto___10944]));

var G__10945 = (i__7493__auto___10944 + (1));
i__7493__auto___10944 = G__10945;
continue;
} else {
}
break;
}

var G__10942 = args10937.length;
switch (G__10942) {
case 2:
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args10937.slice((2)),(0),null));
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7511__auto__);

}
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.minus_.call(null,dt,p);
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.minus_,cljs_time.core.minus_.call(null,dt,p),ps);
});

cljs_time.core.minus.cljs$lang$applyTo = (function (seq10938){
var G__10939 = cljs.core.first.call(null,seq10938);
var seq10938__$1 = cljs.core.next.call(null,seq10938);
var G__10940 = cljs.core.first.call(null,seq10938__$1);
var seq10938__$2 = cljs.core.next.call(null,seq10938__$1);
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic(G__10939,G__10940,seq10938__$2);
});

cljs_time.core.minus.cljs$lang$maxFixedArity = (2);

/**
 * Returns a DateTime a supplied period before the present.
 * 
 *   e.g. `(-> 5 years ago)`
 */
cljs_time.core.ago = (function cljs_time$core$ago(period){
return cljs_time.core.minus.call(null,cljs_time.core.now.call(null),period);
});
/**
 * Returns a DateTime for yesterday relative to now
 */
cljs_time.core.yesterday = (function cljs_time$core$yesterday(){
return cljs_time.core.ago.call(null,cljs_time.core.days.call(null,(1)));
});
/**
 * Returns a DateTime a supplied period after the present.
 *   e.g. `(-> 30 minutes from-now)`
 */
cljs_time.core.from_now = (function cljs_time$core$from_now(period){
return cljs_time.core.plus.call(null,cljs_time.core.now.call(null),period);
});
/**
 * Returns the earliest of the supplied DateTimes
 */
cljs_time.core.earliest = (function cljs_time$core$earliest(var_args){
var args10947 = [];
var len__7492__auto___10950 = arguments.length;
var i__7493__auto___10951 = (0);
while(true){
if((i__7493__auto___10951 < len__7492__auto___10950)){
args10947.push((arguments[i__7493__auto___10951]));

var G__10952 = (i__7493__auto___10951 + (1));
i__7493__auto___10951 = G__10952;
continue;
} else {
}
break;
}

var G__10949 = args10947.length;
switch (G__10949) {
case 2:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10947.length)].join('')));

}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.earliest,dts);
});

cljs_time.core.earliest.cljs$lang$maxFixedArity = 2;

/**
 * Returns the latest of the supplied DateTimes
 */
cljs_time.core.latest = (function cljs_time$core$latest(var_args){
var args10954 = [];
var len__7492__auto___10957 = arguments.length;
var i__7493__auto___10958 = (0);
while(true){
if((i__7493__auto___10958 < len__7492__auto___10957)){
args10954.push((arguments[i__7493__auto___10958]));

var G__10959 = (i__7493__auto___10958 + (1));
i__7493__auto___10958 = G__10959;
continue;
} else {
}
break;
}

var G__10956 = args10954.length;
switch (G__10956) {
case 2:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10954.length)].join('')));

}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.latest,dts);
});

cljs_time.core.latest.cljs$lang$maxFixedArity = 2;

/**
 * Returns the start DateTime of an Interval.
 */
cljs_time.core.start = (function cljs_time$core$start(in$){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns the end DateTime of an Interval.
 */
cljs_time.core.end = (function cljs_time$core$end(in$){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns an Interval with an end DateTime the specified Period after the end
 *   of the given Interval
 */
cljs_time.core.extend = (function cljs_time$core$extend(var_args){
var args__7499__auto__ = [];
var len__7492__auto___10963 = arguments.length;
var i__7493__auto___10964 = (0);
while(true){
if((i__7493__auto___10964 < len__7492__auto___10963)){
args__7499__auto__.push((arguments[i__7493__auto___10964]));

var G__10965 = (i__7493__auto___10964 + (1));
i__7493__auto___10964 = G__10965;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic = (function (in$,by){
return cljs.core.assoc.call(null,in$,new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.apply.call(null,cljs_time.core.plus,cljs_time.core.end.call(null,in$),by));
});

cljs_time.core.extend.cljs$lang$maxFixedArity = (1);

cljs_time.core.extend.cljs$lang$applyTo = (function (seq10961){
var G__10962 = cljs.core.first.call(null,seq10961);
var seq10961__$1 = cljs.core.next.call(null,seq10961);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic(G__10962,seq10961__$1);
});

cljs_time.core.month_range = (function cljs_time$core$month_range(p__10968){
var map__10971 = p__10968;
var map__10971__$1 = ((((!((map__10971 == null)))?((((map__10971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10971):map__10971);
var start = cljs.core.get.call(null,map__10971__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__10971__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.take_while.call(null,((function (map__10971,map__10971__$1,start,end){
return (function (p1__10967_SHARP_){
return cljs.core.not.call(null,cljs_time.core.after_QMARK_.call(null,p1__10967_SHARP_,end));
});})(map__10971,map__10971__$1,start,end))
,cljs.core.map.call(null,((function (map__10971,map__10971__$1,start,end){
return (function (p1__10966_SHARP_){
return cljs_time.core.plus.call(null,start,cljs_time.core.months.call(null,(p1__10966_SHARP_ + (1))));
});})(map__10971,map__10971__$1,start,end))
,cljs.core.range.call(null)));
});
cljs_time.core.total_days_in_whole_months = (function cljs_time$core$total_days_in_whole_months(interval){
return cljs.core.map.call(null,(function (p1__10973_SHARP_){
return p1__10973_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range.call(null,interval));
});
/**
 * Returns the number of months in the given Interval.
 * 
 *   For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
 *   returns 1 month.
 * 
 *   Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
 */
cljs_time.core.in_months_ = (function cljs_time$core$in_months_(p__10974){
var map__10977 = p__10974;
var map__10977__$1 = ((((!((map__10977 == null)))?((((map__10977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10977):map__10977);
var interval = map__10977__$1;
var start = cljs.core.get.call(null,map__10977__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__10977__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.count.call(null,cljs_time.core.total_days_in_whole_months.call(null,interval));
});
/**
 * Returns the number of standard years in the given Interval.
 */
cljs_time.core.in_years_ = (function cljs_time$core$in_years_(p__10979){
var map__10982 = p__10979;
var map__10982__$1 = ((((!((map__10982 == null)))?((((map__10982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10982):map__10982);
var start = cljs.core.get.call(null,map__10982__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__10982__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var sm = cljs_time.core.month.call(null,start);
var sd = cljs_time.core.day.call(null,start);
var em = cljs_time.core.month.call(null,end);
var ed = cljs_time.core.day.call(null,end);
var d1 = (cljs.core.truth_((function (){var and__6405__auto__ = cljs_time.core._EQ_.call(null,sm,(2));
if(cljs.core.truth_(and__6405__auto__)){
var and__6405__auto____$1 = cljs_time.core._EQ_.call(null,sd,(29));
if(cljs.core.truth_(and__6405__auto____$1)){
var and__6405__auto____$2 = cljs_time.core._EQ_.call(null,em,(2));
if(cljs.core.truth_(and__6405__auto____$2)){
return cljs_time.core._EQ_.call(null,ed,(28));
} else {
return and__6405__auto____$2;
}
} else {
return and__6405__auto____$1;
}
} else {
return and__6405__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year.call(null,end) - cljs_time.core.year.call(null,start)) - d1);
});
cljs_time.core.conversion_error = (function cljs_time$core$conversion_error(from,to){
var from__$1 = clojure.string.capitalize.call(null,cljs.core.name.call(null,from));
var to__$1 = cljs.core.name.call(null,to);
throw cljs.core.ex_info.call(null,cljs_time.internal.core.format.call(null,"%s cannot be converted to %s",from__$1,to__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unsupported-operation","unsupported-operation",1890540953)], null));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__10984){
var map__10985 = p__10984;
var map__10985__$1 = ((((!((map__10985 == null)))?((((map__10985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10985):map__10985);
var millis = cljs.core.get.call(null,map__10985__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__10985__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__10985__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__10985__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__10985__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__10985__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__10985__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__10985__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__10987 = this;
var map__10987__$1 = ((((!((map__10987 == null)))?((((map__10987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10987):map__10987);
var millis__$1 = cljs.core.get.call(null,map__10987__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__10987__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__10987__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__10987__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__10987__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__10987__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__10987__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__10987__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__10989){
var map__10990 = p__10989;
var map__10990__$1 = ((((!((map__10990 == null)))?((((map__10990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10990):map__10990);
var millis = cljs.core.get.call(null,map__10990__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__10990__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__10990__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__10990__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__10990__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__10990__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__10990__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__10990__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__10992 = this;
var map__10992__$1 = ((((!((map__10992 == null)))?((((map__10992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10992):map__10992);
var millis__$1 = cljs.core.get.call(null,map__10992__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__10992__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__10992__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__10992__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__10992__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__10992__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__10992__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__10992__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__6417__auto__ = years__$1;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return (0);
}
})() * (12)));
} else {
if(cljs.core.truth_(years__$1)){
return (years__$1 * (12));
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__10994){
var map__10995 = p__10994;
var map__10995__$1 = ((((!((map__10995 == null)))?((((map__10995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10995):map__10995);
var millis = cljs.core.get.call(null,map__10995__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__10995__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__10995__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__10995__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__10995__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__10995__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__10995__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__10995__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__10997 = this;
var map__10997__$1 = ((((!((map__10997 == null)))?((((map__10997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10997):map__10997);
var millis__$1 = cljs.core.get.call(null,map__10997__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__10997__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__10997__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__10997__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__10997__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__10997__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__10997__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__10997__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(months__$1)){
return (((months__$1 / (12)) + years__$1) | (0));
} else {
if(cljs.core.truth_(years__$1)){
return years__$1;
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__10999){
var map__11000 = p__10999;
var map__11000__$1 = ((((!((map__11000 == null)))?((((map__11000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11000):map__11000);
var start = cljs.core.get.call(null,map__11000__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__11000__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__11002 = this;
var map__11002__$1 = ((((!((map__11002 == null)))?((((map__11002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11002):map__11002);
var start__$1 = cljs.core.get.call(null,map__11002__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.call(null,map__11002__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return (end__$1.getTime() - start__$1.getTime());
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_months_.call(null,this$__$1);
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_years_.call(null,this$__$1);
});
/**
 * With 2 arguments: Returns true if the given Interval contains the given
 *   DateTime. Note that if the DateTime is exactly equal to the
 *   end of the interval, this function returns false.
 * 
 *   With 3 arguments: Returns true if the start DateTime is
 *   equal to or before and the end DateTime is equal to or after the test
 *   DateTime.
 */
cljs_time.core.within_QMARK_ = (function cljs_time$core$within_QMARK_(var_args){
var args11004 = [];
var len__7492__auto___11010 = arguments.length;
var i__7493__auto___11011 = (0);
while(true){
if((i__7493__auto___11011 < len__7492__auto___11010)){
args11004.push((arguments[i__7493__auto___11011]));

var G__11012 = (i__7493__auto___11011 + (1));
i__7493__auto___11011 = G__11012;
continue;
} else {
}
break;
}

var G__11006 = args11004.length;
switch (G__11006) {
case 2:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11004.length)].join('')));

}
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__11007,date){
var map__11008 = p__11007;
var map__11008__$1 = ((((!((map__11008 == null)))?((((map__11008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11008):map__11008);
var start = cljs.core.get.call(null,map__11008__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__11008__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs_time.core.within_QMARK_.call(null,start,end,date);
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,date){
var or__6417__auto__ = cljs_time.core._EQ_.call(null,start,date);
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
var and__6405__auto__ = cljs_time.core.before_QMARK_.call(null,start,date);
if(cljs.core.truth_(and__6405__auto__)){
return cljs_time.core.after_QMARK_.call(null,end,date);
} else {
return and__6405__auto__;
}
}
});

cljs_time.core.within_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * With 2 arguments: Returns true of the two given Intervals overlap.
 *   Note that intervals that satisfy abuts? do not satisfy overlaps?
 * 
 *   With 4 arguments: Returns true if the range specified by start-a and end-a
 *   overlaps with the range specified by start-b and end-b.
 */
cljs_time.core.overlaps_QMARK_ = (function cljs_time$core$overlaps_QMARK_(var_args){
var args11014 = [];
var len__7492__auto___11023 = arguments.length;
var i__7493__auto___11024 = (0);
while(true){
if((i__7493__auto___11024 < len__7492__auto___11023)){
args11014.push((arguments[i__7493__auto___11024]));

var G__11025 = (i__7493__auto___11024 + (1));
i__7493__auto___11024 = G__11025;
continue;
} else {
}
break;
}

var G__11016 = args11014.length;
switch (G__11016) {
case 2:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11014.length)].join('')));

}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__11017,p__11018){
var map__11019 = p__11017;
var map__11019__$1 = ((((!((map__11019 == null)))?((((map__11019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11019):map__11019);
var start_a = cljs.core.get.call(null,map__11019__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__11019__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__11020 = p__11018;
var map__11020__$1 = ((((!((map__11020 == null)))?((((map__11020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11020):map__11020);
var start_b = cljs.core.get.call(null,map__11020__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__11020__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var and__6405__auto__ = cljs.core.not.call(null,(function (){var or__6417__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
})());
if(and__6405__auto__){
return cljs_time.core.overlaps_QMARK_.call(null,start_a,end_a,start_b,end_b);
} else {
return and__6405__auto__;
}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (start_a,end_a,start_b,end_b){
var or__6417__auto__ = (function (){var and__6405__auto__ = cljs_time.core.before_QMARK_.call(null,start_b,end_a);
if(cljs.core.truth_(and__6405__auto__)){
return cljs_time.core.after_QMARK_.call(null,end_b,start_a);
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
var or__6417__auto____$1 = (function (){var and__6405__auto__ = cljs_time.core.after_QMARK_.call(null,end_b,start_a);
if(cljs.core.truth_(and__6405__auto__)){
return cljs_time.core.before_QMARK_.call(null,start_b,end_a);
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_(or__6417__auto____$1)){
return or__6417__auto____$1;
} else {
var or__6417__auto____$2 = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__6417__auto____$2)){
return or__6417__auto____$2;
} else {
return cljs_time.core._EQ_.call(null,start_b,end_a);
}
}
}
});

cljs_time.core.overlaps_QMARK_.cljs$lang$maxFixedArity = 4;

/**
 * Returns true if Interval a abuts b, i.e. then end of a is exactly the
 *   beginning of b.
 */
cljs_time.core.abuts_QMARK_ = (function cljs_time$core$abuts_QMARK_(p__11027,p__11028){
var map__11033 = p__11027;
var map__11033__$1 = ((((!((map__11033 == null)))?((((map__11033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11033):map__11033);
var start_a = cljs.core.get.call(null,map__11033__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__11033__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__11034 = p__11028;
var map__11034__$1 = ((((!((map__11034 == null)))?((((map__11034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11034):map__11034);
var start_b = cljs.core.get.call(null,map__11034__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__11034__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var or__6417__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
});
cljs_time.core.date_QMARK_ = (function cljs_time$core$date_QMARK_(x){
if(!((x == null))){
if((false) || (x.cljs_time$core$DateTimeProtocol$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,x);
}
});
cljs_time.core.interval_QMARK_ = (function cljs_time$core$interval_QMARK_(x){
return (x instanceof cljs_time.core.Interval);
});
cljs_time.core.period_QMARK_ = (function cljs_time$core$period_QMARK_(x){
return (x instanceof cljs_time.core.Period);
});
cljs_time.core.period_type_QMARK_ = (function cljs_time$core$period_type_QMARK_(type,x){
var and__6405__auto__ = cljs_time.core.period_QMARK_.call(null,x);
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core.contains_QMARK_.call(null,x,type);
} else {
return and__6405__auto__;
}
});
/**
 * Returns true if the given value is an instance of Years
 */
cljs_time.core.years_QMARK_ = (function cljs_time$core$years_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),val);
});
/**
 * Returns true if the given value is an instance of Months
 */
cljs_time.core.months_QMARK_ = (function cljs_time$core$months_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"months","months",-45571637),val);
});
/**
 * Returns true if the given value is an instance of Weeks
 */
cljs_time.core.weeks_QMARK_ = (function cljs_time$core$weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),val);
});
/**
 * Returns true if the given value is an instance of Days
 */
cljs_time.core.days_QMARK_ = (function cljs_time$core$days_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),val);
});
/**
 * Returns true if the given value is an instance of Hours
 */
cljs_time.core.hours_QMARK_ = (function cljs_time$core$hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),val);
});
/**
 * Returns true if the given value is an instance of Minutes
 */
cljs_time.core.minutes_QMARK_ = (function cljs_time$core$minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),val);
});
/**
 * Returns true if the given value is an instance of Seconds
 */
cljs_time.core.seconds_QMARK_ = (function cljs_time$core$seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),val);
});
cljs_time.core.mins_ago = (function cljs_time$core$mins_ago(d){
return cljs_time.core.in_minutes.call(null,cljs_time.core.interval.call(null,d,cljs_time.core.now.call(null)));
});
cljs_time.core.last_day_of_the_month = (function cljs_time$core$last_day_of_the_month(var_args){
var args11039 = [];
var len__7492__auto___11042 = arguments.length;
var i__7493__auto___11043 = (0);
while(true){
if((i__7493__auto___11043 < len__7492__auto___11042)){
args11039.push((arguments[i__7493__auto___11043]));

var G__11044 = (i__7493__auto___11043 + (1));
i__7493__auto___11043 = G__11044;
continue;
} else {
}
break;
}

var G__11041 = args11039.length;
switch (G__11041) {
case 1:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11039.length)].join('')));

}
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.last_day_of_the_month_.call(null,dt);
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.last_day_of_the_month.cljs$lang$maxFixedArity = 2;

cljs_time.core.number_of_days_in_the_month = (function cljs_time$core$number_of_days_in_the_month(var_args){
var args11046 = [];
var len__7492__auto___11049 = arguments.length;
var i__7493__auto___11050 = (0);
while(true){
if((i__7493__auto___11050 < len__7492__auto___11049)){
args11046.push((arguments[i__7493__auto___11050]));

var G__11051 = (i__7493__auto___11050 + (1));
i__7493__auto___11050 = G__11051;
continue;
} else {
}
break;
}

var G__11048 = args11046.length;
switch (G__11048) {
case 1:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11046.length)].join('')));

}
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.number_of_days_in_the_month.call(null,cljs_time.core.year.call(null,dt),cljs_time.core.month.call(null,dt));
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.call(null,year,month).getDate();
});

cljs_time.core.number_of_days_in_the_month.cljs$lang$maxFixedArity = 2;

cljs_time.core.first_day_of_the_month = (function cljs_time$core$first_day_of_the_month(var_args){
var args11053 = [];
var len__7492__auto___11056 = arguments.length;
var i__7493__auto___11057 = (0);
while(true){
if((i__7493__auto___11057 < len__7492__auto___11056)){
args11053.push((arguments[i__7493__auto___11057]));

var G__11058 = (i__7493__auto___11057 + (1));
i__7493__auto___11057 = G__11058;
continue;
} else {
}
break;
}

var G__11055 = args11053.length;
switch (G__11055) {
case 1:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11053.length)].join('')));

}
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.first_day_of_the_month_.call(null,dt);
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.first_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.first_day_of_the_month.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
cljs_time.core.IToPeriod = function(){};

cljs_time.core.__GT_period = (function cljs_time$core$__GT_period(obj){
if((!((obj == null))) && (!((obj.cljs_time$core$IToPeriod$__GT_period$arity$1 == null)))){
return obj.cljs_time$core$IToPeriod$__GT_period$arity$1(obj);
} else {
var x__7080__auto__ = (((obj == null))?null:obj);
var m__7081__auto__ = (cljs_time.core.__GT_period[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,obj);
} else {
var m__7081__auto____$1 = (cljs_time.core.__GT_period["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"IToPeriod.->period",obj);
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (p__11060){
var map__11061 = p__11060;
var map__11061__$1 = ((((!((map__11061 == null)))?((((map__11061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11061):map__11061);
var interval = map__11061__$1;
var start = cljs.core.get.call(null,map__11061__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__11061__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__11063 = this;
var map__11063__$1 = ((((!((map__11063 == null)))?((((map__11063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11063):map__11063);
var interval__$1 = map__11063__$1;
var start__$1 = cljs.core.get.call(null,map__11063__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.call(null,map__11063__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var years = cljs_time.core.in_years.call(null,interval__$1);
var start_year = cljs_time.core.year.call(null,start__$1);
var leap_years = cljs.core.count.call(null,cljs.core.remove.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.call(null,start_year,(start_year + years)))));
var start_month = cljs_time.core.month.call(null,start__$1);
var days_in_months = cljs_time.core.total_days_in_whole_months.call(null,interval__$1);
var months = (cljs.core.count.call(null,days_in_months) - (years * (12)));
var days_to_remove = cljs.core.reduce.call(null,cljs.core._PLUS_,days_in_months);
var days = (cljs_time.core.in_days.call(null,interval__$1) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (cljs_time.core.in_hours.call(null,interval__$1) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (cljs_time.core.in_minutes.call(null,interval__$1) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (cljs_time.core.in_seconds.call(null,interval__$1) - seconds_to_remove);
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),years,new cljs.core.Keyword(null,"months","months",-45571637),months,new cljs.core.Keyword(null,"days","days",-1394072564),days,new cljs.core.Keyword(null,"hours","hours",58380855),hours,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds,new cljs.core.Keyword(null,"millis","millis",-1338288387),(cljs_time.core.in_millis.call(null,interval__$1) - ((1000) * (seconds + seconds_to_remove))));
});

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$ = true;

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (period){
var period__$1 = this;
return period__$1;
});
cljs_time.core.today_at = (function cljs_time$core$today_at(var_args){
var args11065 = [];
var len__7492__auto___11070 = arguments.length;
var i__7493__auto___11071 = (0);
while(true){
if((i__7493__auto___11071 < len__7492__auto___11070)){
args11065.push((arguments[i__7493__auto___11071]));

var G__11072 = (i__7493__auto___11071 + (1));
i__7493__auto___11071 = G__11072;
continue;
} else {
}
break;
}

var G__11067 = args11065.length;
switch (G__11067) {
case 4:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11065.length)].join('')));

}
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4 = (function (hours,minutes,seconds,millis){
var midnight = (function (){var G__11068 = (new goog.date.Date());
G__11068.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__11068;
})();
var G__11069 = (new goog.date.UtcDateTime((0)));
G__11069.setYear(midnight.getYear());

G__11069.setMonth(midnight.getMonth());

G__11069.setDate(midnight.getDate());

G__11069.setHours(hours);

G__11069.setMinutes(minutes);

G__11069.setSeconds(seconds);

G__11069.setMilliseconds(millis);

return G__11069;
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljs_time.core.today_at.call(null,hours,minutes,seconds,(0));
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljs_time.core.today_at.call(null,hours,minutes,(0));
});

cljs_time.core.today_at.cljs$lang$maxFixedArity = 4;

cljs_time.core.do_at_STAR_ = (function cljs_time$core$do_at_STAR_(base_date_time,body_fn){
var _STAR_ms_fn_STAR_11075 = cljs_time.core._STAR_ms_fn_STAR_;
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.static_ms_fn.call(null,base_date_time.getTime());

try{return body_fn.call(null);
}finally {cljs_time.core._STAR_ms_fn_STAR_ = _STAR_ms_fn_STAR_11075;
}});

//# sourceMappingURL=core.js.map?rel=1505229169518