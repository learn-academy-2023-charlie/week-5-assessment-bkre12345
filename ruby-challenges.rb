# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1)
def filter_by_letter(words, letter)
    filtered_words = []

    words.each do |word|
       if word.include?(letter)
        filtered_words << word
       end
    end
    filtered_words
end

describe 'filter_by_letter' do
    beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
    
    it 'returns words that have the letter "o"' do
        filter_letter_o = 'o'
        result = filter_by_letter(beverages_array, filter_letter_o)
        expect(result).to eq(['coffee','soda water'])
    end

    it 'returns words that have the letter "t"' do
        filter_letter_t = 't'
        result = filter_by_letter(beverages_array, filter_letter_t)
        expect(result).to eq(['tea', 'water', 'soda water'])
    end

end


# -------------------2)
def states_in_order(hash)
    values = hash.values.flatten
    sorted = values.sort
    sorted
end

describe 'states_in_order' do
    us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], northeast: ['Maine', 'New Hampshire', 'Rhode Island'] }

    it 'returns the states alphabetized in one array' do
        result = states_in_order(us_states)
        expect(result).to eq(['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'])
    end
end

# --------------------3a)
class Bike
    attr_accessor :model, :wheels, :current_speed

    def initialize(model, wheels = 2)
        @model = model
        @wheels = wheels
        @current_speed = 0
    end

    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster(speed)
        @current_speed += speed
    end

    def brake(speed)
        @current_speed = [@current_speed - amount, 0].max
    end
end

my_bike = Bike.new('Charlie')
puts my_bike.bike_info
# Output: 'The Charlie bike has 2 wheels and is going 0 mph.'

my_bike.pedal_faster(10) 
puts my_bike.current_speed
# Output: 10

my_bike.pedal_faster(18)
puts my_bike.current_speed
# Output: 28

my_bike.brake(5)
puts my_bike.current_speed
# Output: 23

my_bike.brake(25) 
puts my_bike.current_speed
# Output: 0
