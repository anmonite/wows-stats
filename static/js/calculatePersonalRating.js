var calculatePersonalRating = function(expected, actual) {
	var wins = (actual.wins * 100 / expected.win_rate);
	var damage = actual.damage_dealt / expected.average_damage_dealt;
	var frags = actual.frags / expected.average_frags;

	var normalize_wins = Math.max(0, (wins - 0.7) / (1.0 - 0.7));
	var normalize_damage = Math.max(0, (damage - 0.4) / (1.0 - 0.4));
	var normalize_frags = Math.max(0, (frags - 0.1) / (1.0 - 0.1));

	var pr_value = 700*normalize_damage + 300*normalize_frags + 150*normalize_wins;

	return pr_value;
};
